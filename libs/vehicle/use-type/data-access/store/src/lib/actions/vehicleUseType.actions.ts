import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';


export const loadVehicleUseType = createAction(
  '[VehicleUseType Exists Guard] Load VehicleUseType',
  props<{ vehicleUseType: VehicleUseType }>()
);
