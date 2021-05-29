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


@Component({
  selector: 'zyweb-shared-ui-base-new-form-button',
  templateUrl: './new-form-button.component.html',
  styleUrls: ['./new-form-button.component.scss'],
  providers: []
})


export class NewFormButtonComponent implements OnInit {
  @Input()   public isFormValid = false;
  @Input() validateButtonClicked: Subject<void>;
  @Input() resetButtonClicked: Subject<void>;
  @Input() cancelButtonClicked: Subject<void>;


  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();
  @Output() resetEvent: EventEmitter<string> = new EventEmitter();

  constructor() {  }

  ngOnInit(): void {  }

  public reset() {
    this.resetEvent.emit();
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }

}

