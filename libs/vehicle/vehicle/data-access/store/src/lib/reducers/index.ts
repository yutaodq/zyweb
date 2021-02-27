import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action
} from '@ngrx/store';

import * as fromRoot from '@zyweb/shared/data-access/store/lvms-root';


import * as fromSearch from './search.reducer';

export const vehicleUseTypesFeatureKey = ' vehicleUseTypes';

export interface VehiclesState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export interface State extends fromRoot.AppState {
  [vehicleUseTypesFeatureKey]: VehiclesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: VehiclesState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
  })(state, action);
}
export const selectVehicleUseTypesState = createFeatureSelector<State, VehiclesState>(
  vehicleUseTypesFeatureKey
);

export const selectSearchState = createSelector(
  selectVehicleUseTypesState,
  (state) => state.search
);
