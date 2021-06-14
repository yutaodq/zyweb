import { createSelector } from '@ngrx/store';

import * as fromFeatureState from '../reducers';
import * as fromCreateReducer from '../reducers/create.reducer';

export const selectVehicleInformation = createSelector(
  fromFeatureState.selectCreateState,
  fromCreateReducer.getVehicleInformation
);

export const selectVehicleStructure = createSelector(
  fromFeatureState.selectCreateState,
  fromCreateReducer.getVehicleStructure
);

export const selectVehicleParameter = createSelector(
  fromFeatureState.selectCreateState,
  fromCreateReducer.getVehicleParameter
);

export const selectVehicleSpecial = createSelector(
  fromFeatureState.selectCreateState,
  fromCreateReducer.getVehicleSpecial
);
