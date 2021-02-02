import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

/**
 * Remove VehicleUseType from Collection Action
 */
export const removeVehicleUseType = createAction(
  '[View Details Page] Remove VehicleUseType',
  props<{ vehicleUseType: VehicleUseType }>()
);

