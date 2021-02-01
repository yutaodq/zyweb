/*
D:\学习案例\sx-tesoreria\src\app\egresos\store\reducers\pago-morralla.reducer.ts
 */

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { createReducer, on } from '@ngrx/store';
import { OldVehicleUseTypeActions } from '../actions';

export const vehicleUseTypeFeatureKey = 'vehicleUseTypes';

export interface State extends EntityState<VehicleUseType> {
  loading: boolean;
  loaded: boolean;
  query: string;

}

export const adapter: EntityAdapter<VehicleUseType> = createEntityAdapter<VehicleUseType>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
  query: '',

});

export const reducer = createReducer(
  initialState,
  on(OldVehicleUseTypeActions.loadVehicleUseTypes,
    (state, {}) => ({
      ...state,
      loading: true
    })),
  on(OldVehicleUseTypeActions.loadVehicleUseTypesSuccess,
    (state, { useTypes }) => (
      adapter.addMany(useTypes, {
        ...state,
        loading: false,
        loaded: true
      }))
  ),
  /*
  查询
 */
  on(OldVehicleUseTypeActions.searchCollection, (state, { query }) => ({
    ...state,
    query: query
  })),

);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getVehicleUseTypesLoading = (state: State) => state.loading;
export const getVehicleUseTypesLoaded = (state: State) => state.loaded;
export const getVehicleUseTypesQuery = (state: State) => state.query;
