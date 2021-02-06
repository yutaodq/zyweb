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

import { CreateFormPresenter } from './create-form.presenter';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

const FIELDS = require('./create-form.json');

@Component({
  selector: 'zyweb-vehicle-use-type-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [CreateFormPresenter]
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit {
  @Output() addEvent: EventEmitter<VehicleUseType> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();

  public model: {};
  public form: FormGroup = new FormGroup({});
  public fields: FormlyFieldConfig[];
  //   [
  //   {
  //     "fieldGroupClassName": "row",
  //     "fieldGroup": [
  //       {
  //         "className": "col-md-6",
  //         "key": "name",
  //         "type": "input",
  //         "templateOptions": {
  //           "label": "车辆用途",
  //           "placeholder": "车辆用途",
  //           "required": true
  //         }
  //       }
  //     ]
  //   },
  //   { "template": "<hr />" },
  //   {
  //     "key": "description",
  //     "type": "input",
  //     "templateOptions": {
  //       "label": "用途描述",
  //       "placeholder": ""
  //     }
  //   }
  // ]

  public options: FormlyFormOptions = {};

  constructor(private builder: FormlyFormBuilder,
              private _formPresenter: CreateFormPresenter,
  private formlyJsonschema: FormlyJsonschema
  ) {

  }

  ngOnInit(): void {
    this._formPresenter.add$.subscribe(vehicleUseType => this.addEvent.emit(vehicleUseType));
    this._formPresenter.cancel$.subscribe(name => this.cancelEvent.emit(name));
    this.builder.buildForm(this.form, this.fields, this.model, this.options);
    // this.fields = this.formlyJsonschema.toFieldConfig('./form.json')
    // this._formPresenter.getFields().subscribe(fields => (this.fields = fields));
    // this._model = this._formPresenter.model
    // this._form = this._formPresenter.form;
  }

  onSubmit(model: any) {
    this._formPresenter.save();
  }

  public cancelCreate(): void {
    this._formPresenter.cancel();
  }

  // get options(): FormlyFormOptions {
  //   return this._formPresenter.options;
  // }

  // get form(): FormGroup {
  //   return this._form;
  // }
  // get model() {
  //   return this._model;
  // }
  // get fields(): FormlyFieldConfig[] {
  //   return this._formPresenter.fields;
  // }
}

