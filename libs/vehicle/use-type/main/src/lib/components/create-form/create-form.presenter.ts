import { ChangeDetectionStrategy, Component, Injectable, OnDestroy } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable, of, Subject, timer} from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { v4 as uuidv4 } from 'uuid';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { catchError, map, switchMap, first  } from 'rxjs/operators';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';

const FIELDS = require('./create-form.json');

@Injectable()
export class CreateFormPresenter {
  private _add: Subject<VehicleUseType> = new Subject();
  add$: Observable<VehicleUseType> = this._add.asObservable();

  private _cancel: Subject<string> = new Subject();
  cancel$: Observable<string> = this._cancel.asObservable();

  private _form = new FormGroup({});
  private _model = {};
  private _options: FormlyFormOptions = {};

  // fields: FormlyFieldConfig[] = FIELDS;
  constructor(private _vehicleUseTypesApiClient: VehicleUseTypesApiClient) {
  }

  exists(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const name = control.value;
      if (!name) {
        return of(null);
      }
      return this.findName(name);
    };
  }

  public findName(name: string): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return  this._vehicleUseTypesApiClient.findByName(name).pipe(
          first(),
          map(vehicleUseType => vehicleUseType.length === 1),
          map(valid => (!valid ? {'uniqueName': true} : null)),
    );
  }


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
    return this._options;
  }
}
