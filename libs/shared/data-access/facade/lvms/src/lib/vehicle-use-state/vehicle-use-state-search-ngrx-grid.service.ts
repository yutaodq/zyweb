import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromVehicleUseStates from '@zyweb/vehicle/use-state/data-access/store';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';

@Injectable()
export class VehicleUseStateSearchNgrxGridService extends  SearchNgrxGridService{

  constructor(
    protected appState$: Store<fromVehicleUseStates.State>,
  ) {
    super();
    this.query$ = this.appState$.pipe(select(fromVehicleUseStates.SearchSelectors.selectSearchQuery));
    this.registerEvents();
  }

  search(query: string) {
    this.appState$.dispatch(fromVehicleUseStates.CollectionPageActions.searchVehicles({query}));
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
  }

}
