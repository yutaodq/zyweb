import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ListVehicleUseTypeService {

  constructor(
    private _vehicleUseThypeFacade: VehicleUseTypeFacade
  ) {
  }

  get rowViewModel$(): Observable<VehicleUseType[]> {
    return this._vehicleUseThypeFacade.entities$;
  }

  showDetail(id: string) {
    this._vehicleUseThypeFacade.showDetail(id);
  }

  create() {
    this._vehicleUseThypeFacade.create();
  }

}
