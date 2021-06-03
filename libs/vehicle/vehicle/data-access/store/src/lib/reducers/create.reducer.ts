import {
   VehicleCreateActions
} from '../actions';
import { createReducer, on } from '@ngrx/store';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

export const vehicleCreatreFeatureKey = 'vehicleCreatre';

export interface State {
  vehicle: Vehicle;
  error: string;
  query: string;}

const initialState: State = {
  vehicle: null,
  error: '',
  query: '',
};

export const reducer = createReducer(
  initialState,
  on(VehicleCreateActions.vehicleCreatreFormNext, (state, { vehicle }) => ({
    ...state,
    vehicle: vehicle
  })),

);

export const getVehicle = (state: State) => state.vehicle;

