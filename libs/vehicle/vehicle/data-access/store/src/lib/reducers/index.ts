import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action
} from '@ngrx/store';

import * as fromRoot from '@zyweb/shared/data-access/store/lvms-root';

import * as fromSearch from './search.reducer';

import * as fromCretate from './create.reducer';

export const vehiclesFeatureKey = 'vehicle';

export interface VehiclesState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromCretate.vehicleCreatreFeatureKey]: fromCretate.State;

}

export interface State extends fromRoot.AppState {
  [vehiclesFeatureKey]: VehiclesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: VehiclesState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromCretate.vehicleCreatreFeatureKey]: fromCretate.reducer,
  })(state, action);
}
export const selectVehicleUseTypesState = createFeatureSelector<State, VehiclesState>(
  vehiclesFeatureKey
);

export const selectSearchState = createSelector(
  selectVehicleUseTypesState,
  (state) => state.search
);
export const selectCreateState = createSelector(
  selectVehicleUseTypesState,
  (state) => state.vehicleCreatre
);

