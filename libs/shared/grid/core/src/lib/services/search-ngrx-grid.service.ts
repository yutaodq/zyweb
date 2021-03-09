import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class SearchNgrxGridService {

  private _query$: Observable<string>
  public constructor() {  }

   search(query: string) {
   }

  get query$(): Observable<string> {
    return this._query$;
  }

  set query$(value: Observable<string>) {
    this._query$ = value;
  }
  abstract clearAllFilters()
}
