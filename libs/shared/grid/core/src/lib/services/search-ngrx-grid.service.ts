import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

// @Injectable()
export abstract class SearchNgrxGridService {

  private _query$: Observable<string>
  clearAllFilters$: Subject<string> = new Subject();

  public constructor() {  }

  abstract search(query: string)

  get query$(): Observable<string> {
    return this._query$;
  }

  set query$(value: Observable<string>) {
    this._query$ = value;
  }
  clearAllFilters() {
    this.clearAllFilters$.next('');
  }
}
