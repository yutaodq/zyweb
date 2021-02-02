import { createSelector } from '@ngrx/store';
import * as fromFeatureState from '../reducers';
import * as fromCollectionReducer from '../reducers/collection.reducer';
import * as fromVehicleUseTypeSelectors from './vehicle-use-type.selectors';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

export const selectCollectionLoaded = createSelector(
  fromFeatureState.selectCollectionState,
  fromCollectionReducer.getLoaded
);
export const selectCollectionLoading = createSelector(
  fromFeatureState.selectCollectionState,
  fromCollectionReducer.getLoading
);
export const selectCollectionVehicleUseTypeIds = createSelector(
  fromFeatureState.selectCollectionState,
  fromCollectionReducer.getIds
);

export const selectVehicleUseTypeCollection = createSelector(
  fromVehicleUseTypeSelectors.selectVehicleUseTypeEntities,
  selectCollectionVehicleUseTypeIds,
  (entities, ids) => {
    return ids
      .map((id) => entities[id])
      .filter((vehicleUseType): vehicleUseType is VehicleUseType => vehicleUseType != null);
  }
);

export const isSelectedVehicleUseTypeInCollection = createSelector(
  selectCollectionVehicleUseTypeIds,
  fromVehicleUseTypeSelectors.selectSelectedVehicleUseTypeId,
  (ids, selected) => {
    return !!selected && ids.indexOf(selected) > -1;
  }
);
