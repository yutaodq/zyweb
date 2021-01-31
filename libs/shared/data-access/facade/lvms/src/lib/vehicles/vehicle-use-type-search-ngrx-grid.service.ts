// import { Injectable } from '@angular/core';
// import { select, Store } from '@ngrx/store';
//
// import * as fromVehicleUseTypes from '@zyweb/vehicle/use-type/data-acces/store';
// import { SearchNgrxGridService } from '@zy/shared/locale-text';
//
// @Injectable()
// export class VehicleUseTypeSearchNgrxGridService extends  SearchNgrxGridService{
//
//   constructor(
//     protected appState$: Store<fromVehicles.State>,
//   ) {
//     super();
//     this.query$ = this.appState$.pipe(select(fromVehicles.selectCollectionQuery));
//     this.registerEvents();
//   }
//
//   search(query: string) {
//     this.appState$.dispatch(fromVehicles.CollectionPageActions.searchCollection({query}));
//   }
//
//
//   clearSearch() {
//     this.appState$.dispatch(fromVehicles.CollectionPageActions.searchCollectionClear());
//   }
//
//   /**
//    * Subscribes to events
//    */
//   private registerEvents(): void {
//   }
//
// }
