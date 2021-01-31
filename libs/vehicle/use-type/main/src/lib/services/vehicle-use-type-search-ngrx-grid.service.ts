import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromVehicleUseTypes from '@zyweb/vehicle/use-type/data-access/store';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';

@Injectable()
export class VehicleUseTypeSearchNgrxGridService extends  SearchNgrxGridService{

  constructor(
    protected appState$: Store<fromVehicleUseTypes.State>,
  ) {
    super();
    this.query$ = this.appState$.pipe(select(fromVehicleUseTypes.selectCollectionQuery));
    this.registerEvents();
  }

  search(query: string) {
    this.appState$.dispatch(fromVehicleUseTypes.VehicleUseTypeActions.searchCollection({query}));
  }


  // clearSearch() {
  //   this.appState$.dispatch(fromVehicleUseTypes.VehicleUseTypeActions.searchCollectionClear());
  // }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
  }

}
