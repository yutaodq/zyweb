import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

/**
 * Add VehicleUseType to Collection Actions
 */
export const addVehicleUseTypeSuccess = createAction(
  '[Collection/API] Add VehicleUseType Success',
  props<{ vehicleUseType: VehicleUseType }>()
);

export const addVehicleUseTypeFailure = createAction(
  '[Collection/API] Add VehicleUseType Failure',
  props<{ vehicleUseType: VehicleUseType }>()
);

/**
 * Remove VehicleUseType from Collection Actions
 */
export const removeVehicleUseTypeSuccess = createAction(
  '[Collection/API] Remove VehicleUseType Success',
  props<{ vehicleUseType: VehicleUseType }>()
);

export const removeVehicleUseTypeFailure = createAction(
  '[Collection/API] Remove VehicleUseType Failure',
  props<{ vehicleUseType: VehicleUseType }>()
);

/**
 * Load Collection Actions
 */
export const loadVehicleUseTypesSuccess = createAction(
  '[Collection/API] Load VehicleUseTypes Success',
  props<{ vehicleUseTypes: VehicleUseType[] }>()
);

export const loadVehicleUseTypesFailure = createAction(
  '[Collection/API] Load VehicleUseTypes Failure',
  props<{ error: any }>()
);

/**
 * Update Collection Actions
 */
export const updateVehicleUseTypeSuccess = createAction(
  '[Collection/API] Update VehicleUseTypes Success',
  props<{ vehicleUseType: VehicleUseType }>()
);
