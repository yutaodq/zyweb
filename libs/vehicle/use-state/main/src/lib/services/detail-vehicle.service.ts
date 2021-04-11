import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleApiClient } from '@zyweb/shared/data-access/api/lvms';
import { Vehicle, VehicleUseState, VehicleRowViewModel } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DetailVehicleService {

  constructor(private _vehicleFacade: VehicleFacade,
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              private _vehicleApiClient: VehicleApiClient
  ) {
  }


  get detail$() {
    return this._vehicleFacade.detail$;

  }

  create() {
    this._vehicleFacade.createVehicle();
  }

  toList() {
    this._vehicleFacade.returnToList();

  }

  removeDetail(vehicle: Vehicle) {
    this._vehicleFacade.removeDetail(vehicle);

  }

  updateVehicle(vehicle: any) {
    this._vehicleFacade.updateVehicle(vehicle);

  }
}
