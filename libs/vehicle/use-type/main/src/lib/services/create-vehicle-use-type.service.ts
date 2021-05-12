import { Injectable } from '@angular/core';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';
import {  VehicleUseTypeDataService } from '@zyweb/shared/data-access/api/lvms';
import {  VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import {  AsyncValidatorNameExistsService } from '@zyweb/shared/ui/form';
import { AsyncValidatorFn } from '@angular/forms';

@Injectable()
export class CreateVehicleUseTypeService {
  constructor(private _vehicleUseTypeFacade: VehicleUseTypeFacade,
              private vehicleUseTypeDataService: VehicleUseTypeDataService,
              private _asyncValidatorNameExistsService: AsyncValidatorNameExistsService
  ) {
  }

  cancel() {
    this._vehicleUseTypeFacade.cancelCreate();
  }

  add(vehicleUseType: VehicleUseType) {
    this._vehicleUseTypeFacade.add(vehicleUseType);
  }

  isNameExists(): AsyncValidatorFn {
    return this._asyncValidatorNameExistsService.exists(this.vehicleUseTypeDataService);
  }

}
