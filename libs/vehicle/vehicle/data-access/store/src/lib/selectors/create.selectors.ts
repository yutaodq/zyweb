import { createSelector } from '@ngrx/store';

import * as fromFeatureState from '../reducers';
import * as fromCreateReducer from '../reducers/create.reducer';

export const selectSearchQuery = createSelector(
  fromFeatureState.selectCreateState,
  fromCreateReducer.getVehicle
);
