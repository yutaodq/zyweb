import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { Update } from '@ngrx/entity';

/**
 * Remove VehicleUseType from Collection Action
 */
export const removeVehicleUseType = createAction(
  '[View Details Page] Remove VehicleUseType',
  props<{ vehicleUseType: VehicleUseType }>()
);

export const updateVehicleUseType = createAction(
  '[View Details Page] Update VehicleUseType',
  props<{ vehicleUseType: Update<VehicleUseType> }>()
  // props<{ vehicleUseType: VehicleUseType }>()

);
