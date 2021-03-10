import { createAction, props } from '@ngrx/store';

export const searchVehicleUseStates = createAction(
  '[Vehicle Use State] Collection Page Search',
  props<{ query: string }>()
);
