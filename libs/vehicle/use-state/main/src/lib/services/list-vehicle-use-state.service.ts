import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { Observable } from 'rxjs';

@Injectable()
export class ListVehicleUseStateService {

  constructor(
    private _vehicleUseStateFacade: VehicleUseStateFacade
  ) {
  }

  get rowViewModel$(): Observable<VehicleUseState[]> {
    return this._vehicleUseStateFacade.entities$;
  }

  showDetail(id: string) {
    this._vehicleUseStateFacade.showDetail(id);
  }

  create() {
    this._vehicleUseStateFacade.create();
  }

}
