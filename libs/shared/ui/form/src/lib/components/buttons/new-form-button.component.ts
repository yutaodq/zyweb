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

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'zyweb-shared-ui-form-new-form-button',
  templateUrl: './new-form-button.component.html',
  styleUrls: ['./new-form-button.component.scss'],
  providers: []
})


export class NewFormButtonComponent implements OnInit {
  @Input()   public isFormValid = false;
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();
  @Output() resetEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  public reset() {
    this.resetEvent.emit();
  }

  public cancel(): void {
    this.cancelEvent.emit();

  }
}

