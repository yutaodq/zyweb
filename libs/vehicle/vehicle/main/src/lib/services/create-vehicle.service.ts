import { Injectable } from '@angular/core';
import {
  generateMockVehicleUseState,
  Vehicle, VehicleInformation, VehicleParameter, VehicleSpecial, VehicleStructure,
  VehicleUseState
} from '@zyweb/shared/data-access/model/lvms';
import { AsyncValidatorNameExistsService } from '@zyweb/shared/ui/form';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { ExistsByNameApi, VehicleDataService } from '@zyweb/shared/data-access/api/lvms';
import { Observable, of } from 'rxjs';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateVehicleService {
  constructor(private _vehicleFacade: VehicleFacade,
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              private vehicleDataService: VehicleDataService,
              private _asyncValidatorNameExistsService: AsyncValidatorNameExistsService
  ) {
  }

  createInformationFormNext(vhicleInformation: VehicleInformation) {
    this._vehicleFacade.createInformationFormNext(vhicleInformation);
  }

  createStructureFormPrevious(vehicleStructure: VehicleStructure) {
    this._vehicleFacade.createStructureFormPrevious(vehicleStructure);
  }

  createStructureFormNext(vehicleStructure: VehicleStructure) {
    this._vehicleFacade.createStructureFormNext(vehicleStructure);
  }

  createParameterFormPrevious(vehicleParameter: VehicleParameter) {
    this._vehicleFacade.creatreParameterFormPrevious(vehicleParameter);
  }

  createParameterFormNext(vehicleParameter: VehicleParameter) {
    this._vehicleFacade.createParameterFormNext(vehicleParameter);
  }

  createSpecialFormPrevious(vehicleSpecial: VehicleSpecial) {
    this._vehicleFacade.createSpecialFormPrevious(vehicleSpecial);
  }

  createSpecialFormNext(vehicleSpecial: VehicleSpecial) {
    this._vehicleFacade.createSpecialFormNext(vehicleSpecial);
  }

  createConfirmationFormPrevious() {
    this._vehicleFacade.createConfirmationFormPrevious();
  }

  cancel() {
    this._vehicleFacade.cancelCreate();
  }

  add() {
    // vehicle.id = uuidv4();
    // console.log('aaaaaaa:' + vehicle.ccrq);
    this._vehicleFacade.add();
  }

  // getVehiclesUseState(): Observable<VehicleUseState[]> {
  //   // const emptyState: VehicleUseState = { id: '', name: '不填写', description: '', updateType: '' };
  //   const emptyState = generateMockVehicleUseState();
  //   // return this._vehicleUseStateFacade.vehicleUseStates$
  //   //   .pipe(
  //   //     startWith([emptyState]),
  //   //     map(vehicleUseStates => [...vehicleUseStates]),
  //   //
  //   //   );
  //   return this._vehicleUseStateFacade.entities$;
  //
  //   // return this._vehicleUseStateFacade.entities$
  //   //   .pipe(map(vehicleUseStates => [emptyState, ...vehicleUseStates]
  //   //     )
  //   //   );
  // }

  // isNbpzExists(): AsyncValidatorFn {
  //   return (control: AbstractControl): Promise<ValidationErrors | null>
  //     | Observable<ValidationErrors | null> => {
  //     const value = control.value;
  //     if (!value) {
  //       return of(null);
  //     }
  //     return this.vehicleDataService.existsByNbpz(value).pipe(
  //       map(valid => (!valid ? { FORMLY_UNIQUE_NAME: true } : null))
  //     );
  //   };
  // }

  // isPzExists(): AsyncValidatorFn {
  //   return (control: AbstractControl): Promise<ValidationErrors | null>
  //     | Observable<ValidationErrors | null> => {
  //     const value = control.value;
  //     if (!value) {
  //       return of(null);
  //     }
  //     return this.vehicleDataService.existsByPz(value).pipe(
  //       map(valid => (!valid ? { FORMLY_UNIQUE_NAME: true } : null))
  //     );
  //   };
  // }
  // nameResults(): Observable<Vehicle[]> {
  //   return this._vehicleFacade.entities$;
  // }

  // search(): Observable<Vehicle[]> {
  //   return this._vehicleFacade.entities$;
  // }


  // public exists(api: ExistsByNameApi): AsyncValidatorFn {
  //   return (control: AbstractControl): Promise<ValidationErrors | null>
  //     | Observable<ValidationErrors | null> => {
  //     const name = control.value;
  //     if (!name) {
  //       return of(null);
  //     }
  //     return this.isNameExists(name, api);
  //   };
  // }
  //
  // private isNameExists(name: string, api: ExistsByNameApi): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //   return this.vehicleDataService.existsByPz(name).pipe(
  //     map(valid => (!valid ? { FORMLY_UNIQUE_NAME: true } : null))
  //   );
  // }

}
