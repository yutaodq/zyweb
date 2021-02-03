import { createSelector } from '@ngrx/store';

import * as fromFeatureState from '../reducers';
import * as fromVehicleUseTypesReducer from '../reducers/vehicle-use-types.reducer';

export const selectSelectedVehicleUseTypeId = createSelector(
  fromFeatureState.selectVehicleUseTypeEntitiesState,
  fromVehicleUseTypesReducer.selectId
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: selectVehicleUseTypeIds,
  selectEntities: selectVehicleUseTypeEntities,
  selectAll: selectAllVehicleUseTypes,
  selectTotal: selectTotalVehicleUseTypes,
} = fromVehicleUseTypesReducer.adapter.getSelectors(fromFeatureState.selectVehicleUseTypeEntitiesState);

export const selectSelectedVehicleUseType = createSelector(
  selectVehicleUseTypeEntities,
  selectSelectedVehicleUseTypeId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

/**
 * Just like with the vehicleUseTypes selectors, we also have to compose the search-rxjs
 * reducer's and collection reducer's selectors.
 */
