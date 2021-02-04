import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { v4 as uuidv4 } from 'uuid';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

const FIELDS = require('./create-form.json');

export class CreateFormPresenter {
  private _add: Subject<VehicleUseType> = new Subject();
  add$: Observable<VehicleUseType> = this._add.asObservable();

  private _cancel: Subject<string> = new Subject();
  cancel$: Observable<string> = this._cancel.asObservable();

  form = new FormGroup({});
  model = {};

  fields: FormlyFieldConfig[] = FIELDS;
  options: FormlyFormOptions = {};

  public cancel(): void {
    this._cancel.next('cancelCreate');
  }

  public save(): void {
    if (!this.form.valid) {
      console.log('public save(): void保存记录错误' + uuidv4());
      return;
    }
    // const vehicleUseType: vehicleUseTypeUseType = {id: 'ddsdsdsds',
    // name: this.model.valueOf}
    // // this.model as vehicleUseTypeUseType;
    const vehicleUseType: VehicleUseType = this.model as VehicleUseType;
    vehicleUseType.id = uuidv4();
    Object.keys(vehicleUseType).forEach((key) => (vehicleUseType[key] === null || vehicleUseType[key] === '') && delete vehicleUseType[key]);

    // const data = { ...this.model };
    this._add.next(vehicleUseType);

  }
}
