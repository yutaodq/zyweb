// import { Injectable } from '@angular/core';
// import {
//   EntityCollectionServiceBase,
//   EntityCollectionServiceElementsFactory
// } from '@ngrx/data';
// import { createSelector, select } from '@ngrx/store';
// import { RouteSelectors } from '@zyweb/shared/data-access/store/ngrx-router';
//
// import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
//
// @Injectable({ providedIn: 'root' })
// export class VehicleUseStateCollectionService extends EntityCollectionServiceBase<VehicleUseState> {
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
//     super('VehicleUseState', serviceElementsFactory);
//   }
//   private getSelectedId = createSelector(
//     RouteSelectors.getMergedRoute,
//     (mergedRoute) => <string>mergedRoute.params.id
//   );
//
//   selectedId$ = this.store.pipe(select(this.getSelectedId))
//
//   private getSelected = createSelector(
//     this.selectors.selectEntityMap,
//     this.getSelectedId,
//     (entities, selectedId) => <VehicleUseState>(selectedId && entities[selectedId])
//   );
//
//   selected$ = this.store.pipe(select(this.getSelected))
// }
