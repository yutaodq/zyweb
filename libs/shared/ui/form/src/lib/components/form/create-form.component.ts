import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core'


@Component({
  selector: 'zyweb-shared-ui-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit {
  @Input()   public form:        FormGroup;
  @Input()   public model:        {};
  @Input()   public options:        FormlyFormOptions;
  @Input()   public fields:        FormlyFieldConfig[];

  constructor(private builder: FormlyFormBuilder) {
  }
  ngOnInit(): void {
    this.builder.buildForm(this.form, this.fields, this.model, this.options)
  }

}

