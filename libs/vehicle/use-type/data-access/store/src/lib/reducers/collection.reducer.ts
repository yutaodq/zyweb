import { createReducer, on } from '@ngrx/store';

import {
  CollectionApiActions,
  CollectionPageActions,
  NewVehicleUseTypePageActions, ViewVehicleUseTypePageActions
} from '../actions';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export const reducer = createReducer(
  initialState,
  on(CollectionPageActions.loadVehicleUseTypes,
    (state) => ({
      ...state,
      loading: true
    })),
  /**
   * 加载集合成功.
   */
  on(CollectionApiActions.loadVehicleUseTypesSuccess,
    (state, { vehicleUseTypes }) => ({
      loaded: true,
      loading: false,
      ids: vehicleUseTypes.map((vehicleUseType) => vehicleUseType.id)
    })),
  /**
   * 删除失败或添加.
   */
  on(
    NewVehicleUseTypePageActions.addVehicleUseType,
    CollectionApiActions.removeVehicleUseTypeFailure,
    (state, { vehicleUseType }) => {
      if (state.ids.indexOf(vehicleUseType.id) > -1) {
        return state;
      }
      return {
        ...state,
        ids: [...state.ids, vehicleUseType.id]
      };
    }
  ),
  /**
   * 删除或添加失败.
   */
  on(
    ViewVehicleUseTypePageActions.removeVehicleUseType,
    CollectionApiActions.addVehicleUseTypeFailure,
    (state, { vehicleUseType }) => ({
      ...state,
      ids: state.ids.filter((id) => id !== vehicleUseType.id)
    })
  )
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
