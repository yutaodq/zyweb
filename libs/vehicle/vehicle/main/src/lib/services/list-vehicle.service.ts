import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleApiClient } from '@zyweb/shared/data-access/api/lvms';
import { Vehicle, VehicleUseState, VehicleList } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';

@Injectable()
export class ListVehicleService {
  vehicleList: VehicleList;

  constructor(private _vehicleFacade: VehicleFacade,
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              private _vehicleApiClient: VehicleApiClient,
  ) {
  }

  cancel() {
    this._vehicleFacade.cancelCreate();
  }

  add(vehicle: Vehicle) {
    this._vehicleFacade.addVehicle(vehicle);
  }


  getVehiclesUseState(): VehicleUseState[] {
    let abc: VehicleUseState[];
    const def: VehicleUseState = {id: '',name: '不填写', description: ''};
    this._vehicleFacade.vehicles$.pipe().subscribe();
    this._vehicleUseStateFacade.vehicleUseStates$.subscribe(vehicleUseState =>  abc= vehicleUseState)
    abc =[def, ...abc];
    return abc;
    // return this._vehicleUseStateFacade.vehicleUseStates$;
  }


}
