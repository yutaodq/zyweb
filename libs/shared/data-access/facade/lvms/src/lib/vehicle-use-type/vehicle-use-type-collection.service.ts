import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { createSelector, select } from '@ngrx/store';
import { RouteSelectors } from '@zyweb/shared/data-access/store/ngrx-router';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';


@Injectable({ providedIn: 'root' })
export class VehicleUseTypeCollectionService extends EntityCollectionServiceBase<VehicleUseType> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('VehicleUseType', serviceElementsFactory);
  }
  private getSelectedId = createSelector(
    RouteSelectors.getMergedRoute,
    (mergedRoute) => <string>mergedRoute.params.id
  );

  selectedId$ = this.store.pipe(select(this.getSelectedId))

  private getSelected = createSelector(
    this.selectors.selectEntityMap,
    this.getSelectedId,
    (entities, selectedId) => <VehicleUseType>(selectedId && entities[selectedId])
  );

  selected$ = this.store.pipe(select(this.getSelected))
}
