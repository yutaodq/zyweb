import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';


export const loadVehicleUseTypes = createAction(
  '[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES');

export const loadVehicleUseTypesSuccess = createAction(
  '[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES_SUCCESS',
  props<{ useTypes: VehicleUseType[] }>());

export const loadVehicleUseTypesFail = createAction(
  '[vehicleUseTypes] LOAD_LOAD_VEHICLE_USE_TYPES_FAIL',
  props<{ error: Error }>());

export const searchCollection = createAction(
  '[VehicleUseTypes Collection Page] Search VehicleUseTypes',
  props<{ query: string }>()
);

// export const searchCollectionClear = createAction(
//   '[VehicleUseTypes Collection Page] Search VehicleUseTypes Clear',
//   // props<{ query: string }>()
// );
