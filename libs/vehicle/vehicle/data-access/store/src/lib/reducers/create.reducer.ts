import {
   VehicleCreateActions
} from '../actions';
import { createReducer, on } from '@ngrx/store';
import { VehicleInformation,
  VehicleParameter,
  VehicleStructure,
  VehicleSpecial
} from '@zyweb/shared/data-access/model/lvms';

export const vehicleCreatreFeatureKey = 'vehicleCreatre';

export interface State {
  vehicleInformation: VehicleInformation;
  vehicleParameter: VehicleParameter,
  vehicleStructure: VehicleStructure,
  vehicleSpecial: VehicleSpecial,
  error: string;
  query: string;}

const initialState: State = {
  vehicleInformation: null,
  vehicleParameter: null,
  vehicleStructure: null,
  vehicleSpecial: null,
  error: '',
  query: '',
};

export const reducer = createReducer(
  initialState,
  on(VehicleCreateActions.vehicleCreatreInformationFormNext, (state, { vehicleInformation }) => ({
    ...state,
    vehicleInformation: vehicleInformation
  })),

);

export const getVehicle = (state: State) => state.vehicleInformation;

