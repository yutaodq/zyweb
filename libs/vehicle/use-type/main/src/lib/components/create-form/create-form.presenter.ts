import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
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

  private _form = new FormGroup({});
  private _model = {};
  private _options: FormlyFormOptions = {};

  // fields: FormlyFieldConfig[] = FIELDS;


//   public findName(control: FormControl): Observable<boolean> {
//   console.log('aasdfsdfdfsfa : ' + control.value)
//   return of(false);
// }

  public findName(control: FormControl): Observable<ValidationErrors | null> {
    console.log('aasdfsdfdfsfa : ' + control.value)
    return of( { 'notActive': true });
  }

//   public findName(): AsyncValidatorFn {
//     return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
// console.log('ddddddddddddddddddddddddddddddddd');
//       if (!control.value) { return of(null); }
//       console.log('aaaaaaaaaaaaaaaaaaaaaa');
//       return  of(null);
//         // map(isCodeValid => isCodeValid ? null : { 'notActive': true })
//        };
//
//   }

  public cancel(): void {
    this._cancel.next('cancelCreate');
  }

  public save(): void {
    if (!this._form.valid) {
      return;
    }
    const vehicleUseType: VehicleUseType = this.model as VehicleUseType;

    if (vehicleUseType.id === undefined || vehicleUseType.id === null || vehicleUseType.id === '') {
      vehicleUseType.id = uuidv4();
    }
    Object.keys(vehicleUseType).forEach((key) => (vehicleUseType[key] === null || vehicleUseType[key] === '') && delete vehicleUseType[key]);

    this._add.next(vehicleUseType);
  }

  get form(): FormGroup {
    return this._form;
  }
  get model() {
    return this._model;
  }
get options() {
    return this._options
}
}
