import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { SearchNgrxGridService } from '@zyweb/shared/grid/core';


import * as fromStates from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';

@Injectable()
export class VehicleUseTypeSearchNgrxGridService extends  SearchNgrxGridService{

  constructor(
    protected appState$: Store<fromStates.State>,
  ) {
    super();
    this.query$ = this.appState$.pipe(select(fromSelectors.SearchSelectors.selectSearchQuery));
  }

  search(query: string) {
    this.appState$.dispatch(fromActions.CollectionPageActions.searchVehicleUseTypes({query}));
  }

}
