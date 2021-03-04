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
  templateUrl: './update-zt-form.component.html',
  styleUrls: ['./update-zt-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdateZtFormComponent {
  private _form = new FormGroup({});

  private _model : {id: string, zt: string};
  private _options: FormlyFormOptions = {};

  vehicle: Vehicle;
  public fields: FormlyFieldConfig[] =
    [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-md-6',
            key: 'zt',
            type: 'input',
            focus: true,
            templateOptions: {
              label: '车辆使用状态',
              minLength: 2,
            },
          }
        ]
      },
      { template: '<hr /> ' },
    ];

  constructor( private _ref: DynamicDialogRef,
               private _config: DynamicDialogConfig,
  ) {
    this.vehicle = this._config.data;
    this._model = {...this._config.data}

    // this._model = {id: this.vehicle.id,
    //   zt: this.vehicle.zt,
    //   name: this.vehicle.name}

    // this._model =  this.vehicle

  }
  public cancel(): void{
    this._ref.close(null)
  }

  onSubmit(model: any) {
    // const useType: Vehicle = model as Vehicle;
    // this._ref.close(useType)
    this._ref.close(model)

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

