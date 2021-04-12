import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleUseState, VehicleRowViewModel } from '@zyweb/shared/data-access/model/lvms';
import { Observable, pipe, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ListVehicleUseStateService {

  constructor(
              private _vehicleUseStateFacade: VehicleUseStateFacade,
  ) {
  }

  // get rowViewModel$(): Observable<VehicleRowViewModel[]> {
  //   return this._vehicleUseStateFacade.entities$.pipe(
  //     map((dtos) => dtos.map(
  //       (dto) => {
  //         return this.getRowData(dto);
  //       }
  //       )
  //     )
  //   );
  // }
  //
  // private getRowData(v: Vehicle): VehicleRowViewModel {
  //   return {
  //     id: v.id,
  //     name: v.name,
  //     pz: v.pz,
  //     nbpz: v.nbpz,
  //     type: v.type,
  //     useStateName: v.useState?.name || null
  //
  //   };
  // }

  showDetail(id: string) {
    this._vehicleUseStateFacade.showDetail(id);
  }

  create() {
    this._vehicleUseStateFacade.create();
  }

}
