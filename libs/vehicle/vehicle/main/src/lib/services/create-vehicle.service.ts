import { Injectable } from '@angular/core';
import { VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleApiClient } from '@zyweb/shared/data-access/api/lvms';
import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { AsyncValidatorExistsService } from '@zyweb/shared/ui/form';
import { AsyncValidatorFn } from '@angular/forms';
import { map, reduce } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CreateVehicleService {
  constructor(private _vehicleFacade: VehicleFacade,
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              private _vehicleApiClient: VehicleApiClient,
              private _asyncValidatorExistsService: AsyncValidatorExistsService
  ) {
  }

  cancel() {
    this._vehicleFacade.cancelCreate();
  }

  add(vehicle: Vehicle) {
    this._vehicleFacade.addVehicle(vehicle);
  }


  getVehiclesUseState(): Observable<VehicleUseState[]> {
    const emptyState: VehicleUseState = { id: '', name: '不填写', description: '' };
    return this._vehicleUseStateFacade.vehicleUseStates$
      .pipe(map(vehicleUseStates =>
          [emptyState, ...vehicleUseStates]
        )
      );
  }

  isNameExists(): AsyncValidatorFn {
    return this._asyncValidatorExistsService.exists(this._vehicleApiClient);
  }

}
