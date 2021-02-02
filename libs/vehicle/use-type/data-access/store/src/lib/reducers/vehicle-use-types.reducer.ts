import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  VehicleUseTypeActions,
  CollectionApiActions,
  CollectionPageActions,
} from '../actions';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

export const vehicleUseTypesFeatureKey = 'vehicleUseTypes';


export interface State extends EntityState<VehicleUseType> {
  selectedVehicleUseTypeId: string | null;
}


export const adapter: EntityAdapter<VehicleUseType> = createEntityAdapter<VehicleUseType>({
  selectId: (vehicleUseType: VehicleUseType) => vehicleUseType.id,
  sortComparer: false,
});


export const initialState: State = adapter.getInitialState({
  selectedVehicleUseTypeId: null,
});

export const reducer = createReducer(
  initialState,

  on(
    CollectionApiActions.loadVehicleUseTypesSuccess,
    (state, { vehicleUseTypes }) => adapter.addMany(vehicleUseTypes, state)
  ),

  on(VehicleUseTypeActions.loadVehicleUseType,
    (state, { vehicleUseType }) => adapter.addOne(vehicleUseType, state)),

  on(CollectionPageActions.selectVehicleUseType, (state, { id }) => ({
    ...state,
    selectedVehicleUseTypeId: id,
  }))
);


export const selectId = (state: State) => state.selectedVehicleUseTypeId;
