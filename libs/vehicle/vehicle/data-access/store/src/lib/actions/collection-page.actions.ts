import { createAction, props } from '@ngrx/store';


export const newVehicle = createAction('[Collection Page] New');

export const searchVehicles = createAction(
  '[Collection Page] Search Vehicles',
  props<{ query: string }>()
);
