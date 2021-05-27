import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {
  debounceTime, distinct,
  distinctUntilChanged, filter, flatMap,
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
  private _vehicleName$: Observable<Vehicle[]>

  // vehicleName$: Observable<Vehicle[]> =  this._vehicleFacade.entities$;
  // vehicleName$: Vehicle[] ;

  // vehicleName$: Observable<Vehicle[]> =  this._vehicleFacade.entities$.pipe(
  //   switchMap((vehicles) => vehicles.sort((a, b) => a.name.localeCompare(b.name))),
  //   distinct((a: Vehicle) => a.name),
  //   toArray()
  // );

  constructor(
    private _vehicleDataService: VehicleDataService,
    private _vehicleFacade: VehicleFacade
  ) {
    // this._vehicleFacade.entities$
    // //   .pipe(
    // //   map( (values) =>   values)
    // //
    // // )
    //   .subscribe((values) => this.vehicleName$ = values);


    // this._vehicleFacade.entities$
    //   .pipe(map( (values) => values))
    //   .subscribe(  (values) => this.vehicleName$ = values);

    this._vehicleName$ = this._vehicleFacade.entities$
      .pipe(map( (values) => values))
    ;


    //  this.vehicleName$ = this._vehicleFacade.entities$.pipe(
    //   switchMap((vehicles) => vehicles.sort((a, b) => a.name.localeCompare(b.name))),
    //   distinct((a: Vehicle) => a.name),
    //   toArray()
    // );
  }
  get vehicleName$(): Observable<Vehicle[]> {
    return this._vehicleName$;
  }
  get vehicleFacade(): VehicleFacade {
    return this._vehicleFacade;
  }

  findVehicleName(name: string): Observable<Vehicle[]> {
    // const value = this._vehicleFacade.entities$;
    const value =  this._vehicleDataService.getAll();
    console.log("findVehicleNamefindVehicleNamefindVehicleNamefindVehicleNamefindVehicleName")

    return value;
    // return this._vehicleFacade.entities$.pipe(
    //   map((vehicles) => vehicles)
    // );
  }


// get vehicleName$: Observable<Vehicle[]>() {
//   return this.vehicleName$;
// }


  searchName(event: any) {
    // const value = event.query;
    // console.log("this.countries")
    // console.log(value)
    // this._vehicleFacade.entities$.subscribe(a => this.vehicleName$ = a);
  }


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

