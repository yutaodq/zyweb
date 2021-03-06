import { createAction, props } from '@ngrx/store';

export const searchVehicles = createAction(
  '[Vehicle Use State] Collection Page Search',
  props<{ query: string }>()
);
