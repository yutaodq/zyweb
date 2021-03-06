import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromVehicles from '@zyweb/vehicle/vehicle/data-access/store';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';

@Injectable()
export class VehicleUseStateSearchNgrxGridService extends  SearchNgrxGridService{

  constructor(
    protected appState$: Store<fromVehicles.State>,
  ) {
    super();
    this.query$ = this.appState$.pipe(select(fromVehicles.SearchSelectors.selectSearchQuery));
    this.registerEvents();
  }

  search(query: string) {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.searchVehicles({query}));
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
  }

}
