import { createAction, props } from '@ngrx/store';

/**
 * Load Collection Action
 */
export const loadVehicleUseTypes = createAction('[Collection Page] Load');

export const newVehicleUseTypes = createAction('[Collection Page] New');

export const searchVehicleUseTypes = createAction(
  '[Collection Page] Search VehicleUseTypes',
  props<{ query: string }>()
);

export const selectVehicleUseType = createAction(
  '[Collection Page] Select VehicleUseType',
  props<{ id: string }>()
);
