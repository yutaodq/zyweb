import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { BaseEntityService } from '../base-entity.service';

@Injectable({ providedIn: 'root' })
export class VehicleUseTypeCollectionService extends BaseEntityService<VehicleUseType> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('VehicleUseType', serviceElementsFactory);
  }

}

// @Injectable({ providedIn: 'root' })
// export class VehicleUseTypeCollectionService extends EntityCollectionServiceBase<VehicleUseType> {
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
//     super('VehicleUseType', serviceElementsFactory);
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
//     (entities, selectedId) => <VehicleUseType>(selectedId && entities[selectedId])
//   );
//
//   selected$ = this.store.pipe(select(this.getSelected))
// }
