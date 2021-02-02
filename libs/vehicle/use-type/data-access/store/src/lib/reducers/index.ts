import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action
} from '@ngrx/store';

import * as fromRoot from '@zyweb/shared/data-access/store/lvms-root';


import * as fromSearch from './search.reducer';
import * as fromVehicleUseTypes from './vehicle-use-types.reducer';
import * as fromCollection from './collection.reducer';

export const vehicleUseTypesFeatureKey = ' vehicleUseTypes';

export interface VehicleUseTypesState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromVehicleUseTypes.vehicleUseTypesFeatureKey]: fromVehicleUseTypes.State;
  [fromCollection.collectionFeatureKey]: fromCollection.State;
}

export interface State extends fromRoot.AppState {
  [vehicleUseTypesFeatureKey]: VehicleUseTypesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: VehicleUseTypesState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromVehicleUseTypes.vehicleUseTypesFeatureKey]: fromVehicleUseTypes.reducer,
    [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}
export const selectVehicleUseTypesState = createFeatureSelector<State, VehicleUseTypesState>(
  vehicleUseTypesFeatureKey
);

export const selectVehicleUseTypeEntitiesState = createSelector(
  selectVehicleUseTypesState,
  (state) => state.vehicleUseTypes
);

export const selectSearchState = createSelector(
  selectVehicleUseTypesState,
  (state) => state.search
);

export const selectCollectionState = createSelector(
  selectVehicleUseTypesState,
  (state) => state.collection
);
