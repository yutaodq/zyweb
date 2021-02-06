import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { v4 as uuidv4 } from 'uuid';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

const FIELDS = require('./create-form.json');

export class CreateFormPresenter {
  private _add: Subject<VehicleUseType> = new Subject();
  add$: Observable<VehicleUseType> = this._add.asObservable();

  private _cancel: Subject<string> = new Subject();
  cancel$: Observable<string> = this._cancel.asObservable();

  // form = new FormGroup({});
  // private _model = {};

  // fields: FormlyFieldConfig[] = FIELDS;

  options: FormlyFormOptions = {};

  public get model() {
  return {}
}
  getFields() {
    return of(FIELDS as any);
  }

  public get form() {
    return new FormGroup({});
}
  public cancel(): void {
    this._cancel.next('cancelCreate');
  }

  public save(): void {
    if (!this.form.valid) {
      return;
    }
    const vehicleUseType: VehicleUseType = this.model as VehicleUseType;

    if (vehicleUseType.id === undefined || vehicleUseType.id === null || vehicleUseType.id === '') {
      vehicleUseType.id = uuidv4();
    }
    Object.keys(vehicleUseType).forEach((key) => (vehicleUseType[key] === null || vehicleUseType[key] === '') && delete vehicleUseType[key]);

    this._add.next(vehicleUseType);

  }
}
