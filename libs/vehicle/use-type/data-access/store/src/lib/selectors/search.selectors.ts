import { createSelector } from '@ngrx/store';

import * as fromFeatureState from '../reducers';
import * as fromSearchReducer from '../reducers/search.reducer';

export const selectSearchQuery = createSelector(
  fromFeatureState.selectSearchState,
  fromSearchReducer.getQuery
);
