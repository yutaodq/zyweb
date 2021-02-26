import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  VehicleUseTypeActions,
  CollectionApiActions,
  CollectionPageActions,
} from '../actions';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

export const vehicleUseTypesFeatureKey = 'vehicleUseTypes';


export interface State extends EntityState<Vehicle> {
  selectedVehicleUseTypeId: string | null;
}


export const adapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>({
  selectId: (vehicleUseType: Vehicle) => vehicleUseType.id,
  sortComparer: false,
});


export const initialState: State = adapter.getInitialState({
  selectedVehicleUseTypeId: null,
});

export const reducer = createReducer(
  initialState,

  on(CollectionApiActions.updateVehicleUseTypeSuccess,
    (state, { vehicleUseType }) =>
      adapter.updateOne({id: vehicleUseType.id, changes: vehicleUseType}, state)
  ),

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
