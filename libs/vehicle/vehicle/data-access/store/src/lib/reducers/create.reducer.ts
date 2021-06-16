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
}

const initialState: State = {
  vehicleInformation: null,
  vehicleParameter: null,
  vehicleStructure: null,
  vehicleSpecial: null,
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(VehicleCreateActions.vehicleCreateInformationFormNext, (state, { vehicleInformation }) => ({
    ...state,
    vehicleInformation: vehicleInformation
  })),
  on(VehicleCreateActions.vehicleCreateStructureForm, (state, { vehicleStructure }) => ({
    ...state,
    vehicleStructure: vehicleStructure
  })),
  on(VehicleCreateActions.vehicleCreateParameterForm, (state, { vehicleParameter }) => ({
    ...state,
    vehicleParameter: vehicleParameter
  })),
  on(VehicleCreateActions.vehicleCreateSpecialForm, (state, { vehicleSpecial }) => ({
    ...state,
    vehicleSpecial: vehicleSpecial
  })),

);

export const getVehicleInformation = (state: State) => state.vehicleInformation;

export const getVehicleStructure = (state: State) => state.vehicleStructure;

export const getVehicleParameter = (state: State) => state.vehicleParameter;

export const getVehicleSpecial = (state: State) => state.vehicleSpecial;
