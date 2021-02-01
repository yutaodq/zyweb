import { createAction, props } from '@ngrx/store';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

/**
 * Add Book to Collection Action
 */
export const addVehicleUseType = createAction(
  '[New Vehicle Use Type Page] Add VehicleUseType',
  props<{ vehicleUseType: VehicleUseType }>()
);
