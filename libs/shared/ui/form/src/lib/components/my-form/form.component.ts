// https://github.com/beeman/component-store-playground/blob/main/libs/shared/ui/forms/src/lib/form.component.ts

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core'


@Component({
  selector: 'zyweb-shared-ui-my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FormComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({})
  @Input() fields: FormlyFieldConfig[] = []
  @Input() model?: any = {}
  @Input() options: FormlyFormOptions = {}
  @Output() submitFormEvent = new EventEmitter()

  @Output() cancelEvent = new EventEmitter()

  constructor(private builder: FormlyFormBuilder) {
  }
  ngOnInit(): void {
    this.builder.buildForm(this.form, this.fields, this.model, this.options)
  }
  submit(): void {
    this.submitFormEvent.emit({ ...this.model })
  }
  public reset(): void {
    this.options.resetModel();

  }
  public cancel(): void{
    this.cancelEvent.emit('')
  }

  canSave() {
    return this.form.valid && this.form.pristine;
  }

}

