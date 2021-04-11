import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleApiClient } from '@zyweb/shared/data-access/api/lvms';
import { Vehicle, VehicleUseState, VehicleRowViewModel } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { Observable, pipe, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ListVehicleService {
  rowViewModel: VehicleRowViewModel;

  constructor(private _vehicleFacade: VehicleFacade,
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              private _vehicleApiClient: VehicleApiClient
  ) {
  }

  cancel() {
    this._vehicleFacade.cancelCreate();
  }

  add(vehicle: Vehicle) {
    this._vehicleFacade.addVehicle(vehicle);
  }

  get rowViewModel$(): Observable<VehicleRowViewModel[]> {
    return this._vehicleFacade.entities$.pipe(
      map((dtos) => dtos.map(
        (dto) => {
          return this.getRowData(dto);
        }
        )
      )
    );
  }

  private getRowData(v: Vehicle): VehicleRowViewModel {
    return {
      id: v.id,
      name: v.name,
      pz: v.pz,
      nbpz: v.nbpz,
      type: v.type,
      useStateName: v.useState?.name || null

    };
  }

  showDetail(id: string) {
    this._vehicleFacade.showDetail(id);
  }

  create() {
    this._vehicleFacade.createVehicle();
  }

}
