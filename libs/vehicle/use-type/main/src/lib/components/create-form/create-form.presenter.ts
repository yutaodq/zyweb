import { Injectable } from '@angular/core';
import { AsyncValidatorFn, FormGroup } from '@angular/forms';
import { Observable, of, Subject, timer } from 'rxjs';
import { FormlyFormOptions } from '@ngx-formly/core';
import { v4 as uuidv4 } from 'uuid';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';
import { ExistsService } from '@zyweb/shared/ui/form';


@Injectable()
export class CreateFormPresenter {
  private _add: Subject<VehicleUseType> = new Subject();
  add$: Observable<VehicleUseType> = this._add.asObservable();

  private _cancel: Subject<string> = new Subject();
  cancel$: Observable<string> = this._cancel.asObservable();

  private _reset: Subject<string> = new Subject();
  reset$: Observable<string> = this._reset.asObservable();

  private _form = new FormGroup({});
  private _model = {};
  private _options: FormlyFormOptions = {};

  constructor(private _vehicleUseTypesApiClient: VehicleUseTypesApiClient,
              private _existsService: ExistsService) {
  }

  exists(): AsyncValidatorFn {
    return this._existsService.exists(this._vehicleUseTypesApiClient);
  }

  public cancel(): void {
    this._cancel.next('cancelCreate');
  }

  public reset(): void {
    this._reset.next('reset');
  }

  public isFormValid() {
    return this._form.valid;
  }

  public save(): void {
    if (!this.isFormValid()) {
      return;
    }
    const vehicleUseType: VehicleUseType = this.model as VehicleUseType;
    /*
      可写成 ( this.isEmpty(vehicleUseType.id) ) && (vehicleUseType.id = uuidv4());
      但 tslint.json出现报警信息
     */
    if (this.isEmpty(vehicleUseType.id)) {
      vehicleUseType.id = uuidv4();
    }

    Object.keys(vehicleUseType).forEach(
      (key) => (vehicleUseType[key] === null || vehicleUseType[key] === '') && delete vehicleUseType[key]);

    this._add.next(vehicleUseType);
  }

  private isEmpty(id: string) {
    let isEmpty = false;
    if (id === undefined || id === null || id === '') {
      isEmpty = true;
    }
    return isEmpty;
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
