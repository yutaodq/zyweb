import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

export const vehicleCreatreFormNext = createAction(
  '[Vehicle Cretate] Vehicle Creatre Form Next',
  props<{ vehicle: Vehicle }>()
);
