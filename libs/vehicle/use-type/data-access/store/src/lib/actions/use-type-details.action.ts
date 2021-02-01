
import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';


export const loadVehicleUseTypeDetail = createAction(
  '[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES');

export const loadVehicleUseTypesDetailSuccess = createAction(
  '[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES_SUCCESS',
  props<{ useTypes: VehicleUseType[] }>());

export const loadVehicleUseTypesDetailFail = createAction(
  '[vehicleUseTypes] LOAD_LOAD_VEHICLE_USE_TYPES_FAIL',
  props<{ error: Error }>());

export const searchCollection = createAction(
  '[VehicleUseTypes Collection Page] Search VehicleUseTypes',
  props<{ query: string }>()
);
