import { createAction, props } from '@ngrx/store';

export const searchVehicleUseTypes = createAction(
  '[Vehicle Use Type] Collection Page Search',
  props<{ query: string }>()
);
