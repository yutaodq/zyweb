import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Subject } from 'rxjs';
import * as utils from 'lodash';


@Component({
  selector: 'zyweb-shared-ui-base-new-form-button',
  templateUrl: './new-form-button.component.html',
  styleUrls: ['./new-form-button.component.scss'],
  providers: []
})


export class NewFormButtonComponent implements OnInit {
  @Input() isFormValid = false;

  @Input() saveButtonClicked: Subject<void> = null;
  @Input() resetButtonClicked: Subject<void> = null;
  @Input() cancelButtonClicked: Subject<void> = null;

  @Input() previousStepButtonClicked: Subject<void> = null;
  @Input() nextStepButtonClicked: Subject<void> = null;

  @Input() isStepsFrom = false;

  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();
  @Output() resetEvent: EventEmitter<string> = new EventEmitter();

  constructor() {  }

  ngOnInit(): void {  }

public isShowPreviousStepButton(): boolean {
  // 简写 return utils.isNull(this.previousStepButtonClicked) ? false: true;
  return !utils.isNull(this.previousStepButtonClicked);
}

  public isShowNextStepButton(){
    return !utils.isNull(this.nextStepButtonClicked);
  }

  public isShowSaveButton(): boolean {
    return !utils.isNull(this.saveButtonClicked);
  }

  public reset() {
    this.resetEvent.emit();
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }

}

