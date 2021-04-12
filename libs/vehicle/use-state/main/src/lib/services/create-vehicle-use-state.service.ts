import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import {  VehicleUseStateApiClient } from '@zyweb/shared/data-access/api/lvms';
import {  VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import {  AsyncValidatorNameExistsService } from '@zyweb/shared/ui/form';
import { AsyncValidatorFn } from '@angular/forms';

@Injectable()
export class CreateVehicleUseStateService {
  constructor(private _vehicleUseStateFacade: VehicleUseStateFacade,
              private vehicleUseStateApiClient: VehicleUseStateApiClient,
              private _asyncValidatorNameExistsService: AsyncValidatorNameExistsService
  ) {
  }

  cancel() {
    this._vehicleUseStateFacade.cancelCreate();
  }

  add(vehicleUseState: VehicleUseState) {
    this._vehicleUseStateFacade.add(vehicleUseState);
  }

  isNameExists(): AsyncValidatorFn {
    return this._asyncValidatorNameExistsService.exists(this.vehicleUseStateApiClient);
  }

}
