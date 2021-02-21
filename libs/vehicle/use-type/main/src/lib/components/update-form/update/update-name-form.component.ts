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

import {UpdateNameFormPresenter} from './update-name-form.presenter';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
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

  vehicleUseType: VehicleUseType;
  public fields: FormlyFieldConfig[] =
    [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-md-6',
            key: 'name',
            type: 'inputLx',
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
        type: 'inputLx',
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
    // this._model = {description: this.vehicleUseType.description}
    this._model =  this.vehicleUseType

  }


  public saveUpdate(): void{
    this._ref.close(this.vehicleUseType)

  }
  public cancel(): void{
    this._ref.close(null)

  }
  onSubmit(model: any) {
    this.saveUpdate();
  }

  public reset(): void {
    this._options.resetModel();

  }

  canSave() {
    return this.form.valid && this.form.pristine;
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

