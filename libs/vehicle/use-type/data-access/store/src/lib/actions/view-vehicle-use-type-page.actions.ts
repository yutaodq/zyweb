import { createAction, props } from '@ngrx/store';

export const selectVehicleUseType = createAction(
  '[View Details Page] Delete VehicleUseType',
  props<{ id: string }>()
);
