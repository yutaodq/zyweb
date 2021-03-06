import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action
} from '@ngrx/store';

import * as fromRoot from '@zyweb/shared/data-access/store/lvms-root';


import * as fromSearch from './search.reducer';

export const vehicleUseStatesFeatureKey = ' vehicleUseState';

export interface VehicleUseStatesState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export interface State extends fromRoot.AppState {
  [vehicleUseStatesFeatureKey]: VehicleUseStatesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: VehicleUseStatesState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
  })(state, action);
}
export const selectVehicleUseStatesState = createFeatureSelector<State, VehicleUseStatesState>(
  vehicleUseStatesFeatureKey
);

export const selectSearchState = createSelector(
  selectVehicleUseStatesState,
  (state) => state.search
);

