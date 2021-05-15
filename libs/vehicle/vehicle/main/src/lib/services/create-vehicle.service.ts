import { Injectable } from '@angular/core';
import { Vehicle  } from '@zyweb/shared/data-access/model/lvms';
import { AsyncValidatorNameExistsService } from '@zyweb/shared/ui/form';
import { AsyncValidatorFn } from '@angular/forms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { VehicleDataService } from '@zyweb/shared/data-access/api/lvms';

@Injectable()
export class CreateVehicleService {
  constructor(private _vehicleFacade: VehicleFacade,
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

  isNameExists(): AsyncValidatorFn {
    return this._asyncValidatorNameExistsService.exists(this.vehicleDataService);
  }

}
