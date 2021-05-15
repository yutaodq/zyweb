import { Injectable } from '@angular/core';
import {
  generateMockVehicleUseState,
  Vehicle,
  VehicleUseState
} from '@zyweb/shared/data-access/model/lvms';
import { AsyncValidatorNameExistsService } from '@zyweb/shared/ui/form';
import { AsyncValidatorFn } from '@angular/forms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { VehicleDataService } from '@zyweb/shared/data-access/api/lvms';
import { Observable } from 'rxjs';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { map } from 'rxjs/operators';

@Injectable()
export class CreateVehicleService {
  constructor(private _vehicleFacade: VehicleFacade,
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              private vehicleDataService: VehicleDataService,
              private _asyncValidatorNameExistsService: AsyncValidatorNameExistsService
  ) {
  }

  cancel() {
    this._vehicleFacade.cancelCreate();
  }

  add(vehicle: Vehicle) {
    this._vehicleFacade.add(vehicle);
  }

  getVehiclesUseState(): Observable<VehicleUseState[]> {
    // const emptyState: VehicleUseState = { id: '', name: '不填写', description: '', updateType: '' };
    const emptyState = generateMockVehicleUseState()
    // return this._vehicleUseStateFacade.vehicleUseStates$
    //   .pipe(
    //     startWith([emptyState]),
    //     map(vehicleUseStates => [...vehicleUseStates]),
    //
    //   );
    return this._vehicleUseStateFacade.entities$;

    // return this._vehicleUseStateFacade.entities$
    //   .pipe(map(vehicleUseStates => [emptyState, ...vehicleUseStates]
    //     )
    //   );
  }
  isNameExists(): AsyncValidatorFn {
    return this._asyncValidatorNameExistsService.exists(this.vehicleDataService);
  }

}
