import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { createSelector, select } from '@ngrx/store';
import { RouteSelectors } from '@zyweb/shared/data-access/store/ngrx-router';

@Injectable({ providedIn: 'root' })
export class VehicleCollectionService extends EntityCollectionServiceBase<Vehicle> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Vehicle', serviceElementsFactory);
  }
  private getSelectedId = createSelector(
    RouteSelectors.getMergedRoute,
    (mergedRoute) => <string>mergedRoute.params.id
  );

  selectedId$ = this.store.pipe(select(this.getSelectedId))

  private getSelected = createSelector(
    this.selectors.selectEntityMap,
    this.getSelectedId,
    (entities, selectedId) => <Vehicle>(selectedId && entities[selectedId])
  );

  selected$ = this.store.pipe(select(this.getSelected))
}
