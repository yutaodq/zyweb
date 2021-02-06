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
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import * as Fields from './create-form.fields';
import { Observable, of } from 'rxjs';
const FIELDS = require('./create-form.json');

export function IpValidator(control: FormControl):
  Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  return of(null);
}

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

  public fields: FormlyFieldConfig[] =
    [
      {
        fieldGroupClassName: "row",
        fieldGroup: [
          {
            className: "col-md-6",
            key: "name",
            type: "input",
            templateOptions: {
              label: "车辆用途",
              description: 'dfffffffffffffffffffffffffff',
              placeholder: "车辆用途",
              required: true,
              minLength: 2,
            },
            modelOptions: {
              updateOn: 'blur',
            },
            asyncValidators: {
              uniqueName: {
                expression:
                  (control: FormControl) => {
                  return this._formPresenter.findName(control);
                  // return of(false);
                }
              },

            },

            // asyncValidators: {
            //   uniqueName: {
            //     expression:
            //       (control: FormControl) => {
            //       this._formPresenter.findName();
            //       // return of(false);
            //     }
            //   },
            //
            // },
          }
        ]
      },
      { template: "<hr /> "},
      {
        key: "description",
        type: "input",
        templateOptions: {
          label: "用途描述",
          placeholder: ""
        }
      }
    ];

  constructor(private _formPresenter: CreateFormPresenter) {
  }

  ngOnInit(): void {
    this._formPresenter.add$.subscribe(vehicleUseType => this.addEvent.emit(vehicleUseType));
    this._formPresenter.cancel$.subscribe(name => this.cancelEvent.emit(name));

  }

  onSubmit(model: any) {
    this._formPresenter.save();
  }

  public cancelCreate(): void {
    this._formPresenter.cancel();
  }


  get form(): FormGroup {
    return this._formPresenter.form;
  }
  get model() {
    return this._formPresenter.model;
  }
  get options() {
    return this._formPresenter.options
  }
}

