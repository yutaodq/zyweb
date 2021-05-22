

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap
} from "rxjs/operators";

@Injectable()
export class VehicleCreateFormDataProvider {
  constructor(private httpClient: HttpClient) {}

  searchCountry = (termChanged: Observable<string>): Observable<string[]> =>
    termChanged.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => (term.length < 3 ? of([]) : this.findCountryBy(term))),
      map(values => values.map(country => country.name))
    );

  private findCountryBy(term: string) {
    return this.httpClient.get<any[]>(
      `https://restcountries.eu/rest/v2/name/${term}?fields=name`
    );
  }
}

