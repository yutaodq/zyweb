import {
  CollectionPageActions
} from '../actions';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'search';

export interface State {
  loading: boolean;
  error: string;
  query: string;}

const initialState: State = {
  loading: false,
  error: '',
  query: '',
};

export const reducer = createReducer(
  initialState,
  on(CollectionPageActions.searchVehicles, (state, { query }) => ({
    ...state,
    query: query
  })),

);

export const getQuery = (state: State) => state.query;

