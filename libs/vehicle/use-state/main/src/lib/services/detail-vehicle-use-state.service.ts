import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import {  VehicleUseStateApiClient } from '@zyweb/shared/data-access/api/lvms';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class DetailVehicleUseStateService {

  constructor(
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              // private _vehicleApiClient: VehicleUseStateApiClient
  ) {
  }


  get detail$() {
    return this._vehicleUseStateFacade.detail$;

  }

  create() {
    this._vehicleUseStateFacade.create();
  }

  toList() {
    this._vehicleUseStateFacade.returnToList();

  }

  removeDetail(vehicleUseState: VehicleUseState) {
    this._vehicleUseStateFacade.removeDetail(vehicleUseState);

  }

  update(vehicleUseState: any) {
    this._vehicleUseStateFacade.update(vehicleUseState);

  }
}
