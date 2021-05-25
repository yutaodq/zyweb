import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {
  debounceTime, distinct,
  distinctUntilChanged, flatMap,
  map,
  switchMap, toArray
} from 'rxjs/operators';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { VehicleDataService } from '@zyweb/shared/data-access/api/lvms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';

import { VALIDATION_PATTERNS } from '@zyweb/shared/ui/base';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class VehicleCreateFormDataProvider {
  vehicleName$: Observable<Vehicle[]> =  this._vehicleFacade.entities$;

  // vehicleName$: Observable<Vehicle[]> =  this._vehicleFacade.entities$.pipe(
  //   switchMap((vehicles) => vehicles.sort((a, b) => a.name.localeCompare(b.name))),
  //   distinct((a: Vehicle) => a.name),
  //   toArray()
  // );

  constructor(
    private _vehicleDataService: VehicleDataService,
    private _vehicleFacade: VehicleFacade
  ) {
    //  this.vehicleName$ = this._vehicleFacade.entities$.pipe(
    //   switchMap((vehicles) => vehicles.sort((a, b) => a.name.localeCompare(b.name))),
    //   distinct((a: Vehicle) => a.name),
    //   toArray()
    // );
  }


  // isPzExists(): AsyncValidatorFn {
  //   return (control: AbstractControl): Promise<ValidationErrors | null>
  //     | Observable<ValidationErrors | null> => {
  //     const value = control.value;
  //     if (!value) {
  //       return of(null);
  //     }
  //     return this._vehicleDataService.existsByPz(value).pipe(
  //       map(valid => (valid ? { FORMLY_UNIQUE_NAME: true } : null))
  //
  //     // map(valid => (!valid ? { FORMLY_UNIQUE_NAME: true } : null))
  //     );
  //   };
  // }

  // get entities$(): Observable<Vehicle[]> {
  //   return this._collectionService.entities$;
  // }

  isPzExists(): AsyncValidatorFn {
    const name = VALIDATION_PATTERNS.FORM_UNIQUE_NAME;
    return (control: AbstractControl): Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      return of(control.value).pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(term => (term.length < 3 ? of(null) : this._vehicleDataService.existsByPz(term))),
        map(valid => (valid ? { formUniqueName: true } : null))
      );
    };
  }

  isNbpzExists(): AsyncValidatorFn {
    const name = VALIDATION_PATTERNS.FORM_UNIQUE_NAME;
    return (control: AbstractControl): Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      return of(control.value).pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(term => (term.length < 3 ? of(null) : this._vehicleDataService.existsByNbpz(term))),
        map(valid => (valid ? { formUniqueName: true } : null))
      );
    };
  }

  // searchCountry = (termChanged: Observable<string>): Observable<string[]> =>
  //   termChanged.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     switchMap(term => (term.length < 3 ? of([]) : this.findCountryBy(term))),
  //     map(values => values.map(country => country.name))
  //   );
  //
  // private findCountryBy(term: string) {
  //   return this.httpClient.get<any[]>(
  //     `https://restcountries.eu/rest/v2/name/${term}?fields=name`
  //   );
  // }
}

