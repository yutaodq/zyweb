import {createFeatureSelector, createSelector} from '@ngrx/store';
import { routerStateConfig } from './router-state.config';
import { MergedRouteReducerState } from './router.interfaces';

export const getRouterReducerState =
  createFeatureSelector<MergedRouteReducerState>(routerStateConfig.stateKey);
export const getMergedRoute =
  createSelector(getRouterReducerState,
    (routerReducerState) => routerReducerState.state);

// export const getRouterReducerState = createFeatureSelector<MergedRouteReducerState>(routerStateConfig.stateKey);
// export const getMergedRoute = createSelector(getRouterReducerState, (routerReducerState) => routerReducerState.state);
