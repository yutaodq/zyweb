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
  vehicleUseType: VehicleUseType;
  constructor( private _ref: DynamicDialogRef,
               private _config: DynamicDialogConfig,
  ) {
    this.vehicleUseType = this._config.data;
  }
  public delete(): void{
    this._ref.close(this.vehicleUseType)

  }
  public cancel(): void{
    this._ref.close(null)

  }
}

