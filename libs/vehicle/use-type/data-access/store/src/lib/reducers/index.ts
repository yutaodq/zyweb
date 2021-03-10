import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action
} from '@ngrx/store';

import * as fromRoot from '@zyweb/shared/data-access/store/lvms-root';
import * as fromSearch from './search.reducer';

export const vehicleUseTypesFeatureKey = ' vehicleUseType';

export interface VehicleUseType {
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export interface State extends fromRoot.AppState {
  [vehicleUseTypesFeatureKey]: VehicleUseType;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: VehicleUseType | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
  })(state, action);
}
export const selectVehicleUseStatesState = createFeatureSelector<State, VehicleUseType>(
  vehicleUseTypesFeatureKey
);

export const selectSearchState = createSelector(
  selectVehicleUseStatesState,
  (state) => state.search
);

