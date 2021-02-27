import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'zyweb-vehicle-use-type-update-name-form',
  templateUrl: './update-name-form.component.html',
  styleUrls: ['./update-name-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdateNameFormComponent {
  private _form = new FormGroup({});

  private _model: any = {};
  private _options: FormlyFormOptions = {};

  vehicleUseType: Vehicle;
  public fields: FormlyFieldConfig[] =
    [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-md-6',
            key: 'name',
            type: 'input',
            focus: true,
            templateOptions: {
              label: '车辆用途',
              description: 'dfffffffffffffffffffffffffff',
              placeholder: '车辆用途',
              required: true,
              minLength: 2,
              attributes: { zywebOnlyNumbers: null },
            },
            modelOptions: {
              updateOn: 'blur' //失去焦点后验证
            },
            asyncValidators: {
            }
          }
        ]
      },
      { template: '<hr /> ' },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: '用途描述',
          placeholder: ''
        }
      }
    ];

  constructor( private _ref: DynamicDialogRef,
               private _config: DynamicDialogConfig,
  ) {
    this.vehicleUseType = this._config.data;
    this._model = {id: this.vehicleUseType.id,
      description: this.vehicleUseType.description,
      name: this.vehicleUseType.name}
    // this._model =  this.vehicleUseType

  }
  public cancel(): void{
    this._ref.close(null)
  }

  onSubmit(model: any) {
    const useType: Vehicle = model as Vehicle;
    this._ref.close(useType)
  }

  get form(): FormGroup {
    return this._form;
  }

  get model() {
    return this._model;
  }

  get options(): FormlyFormOptions {
    return this._options;
  }
}
