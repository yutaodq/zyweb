import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { BaseEntityService } from '../base-entity.service';


@Injectable({ providedIn: 'root' })

export class VehicleUseStateCollectionService extends BaseEntityService<VehicleUseState> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('VehicleUseState', serviceElementsFactory);
  }

}


// export class VehicleUseStateCollectionService
//   extends EntityCollectionServiceBase<VehicleUseState> {
//
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
//     super('VehicleUseState', serviceElementsFactory);
//   }
//
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
