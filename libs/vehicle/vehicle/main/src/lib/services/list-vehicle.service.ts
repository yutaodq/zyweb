import { Injectable } from '@angular/core';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { Observable } from 'rxjs';

@Injectable()
export class ListVehicleService {
  constructor(
    private _vehicleFacade: VehicleFacade
  ) {
  }

  get rowViewModel$(): Observable<Vehicle[]> {
    return this._vehicleFacade.entities$;
  }

  showDetail(id: string) {
    this._vehicleFacade.showDetail(id);
  }

  create() {
    this._vehicleFacade.create();
  }
}
