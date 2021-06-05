// import { Injectable } from '@angular/core';
// import { select, Store } from '@ngrx/store';
//
// import * as fromVehicleUseTypes from '@zyweb/information/use-type/data-access/store';
// import { SearchNgrxGridService } from '@zyweb/shared/grid/core';
//
// @Injectable()
// export class VehicleUseTypeSearchNgrxGridService extends  SearchNgrxGridService{
//
//   constructor(
//     protected appState$: Store<fromVehicleUseTypes.State>,
//   ) {
//     super();
//     this.query$ = this.appState$.pipe(select(fromVehicleUseTypes.SearchSelectors.selectSearchQuery));
//   }
//
//   search(query: string) {
//     this.appState$.dispatch(fromVehicleUseTypes.CollectionPageActions.searchVehicleUseTypes({query}));
//   }
//
// }
