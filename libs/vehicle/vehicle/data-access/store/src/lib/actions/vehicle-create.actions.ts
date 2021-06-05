import { createAction, props } from '@ngrx/store';
import { VehicleInformation,
  VehicleParameter,
  VehicleStructure,
  VehicleSpecial
} from '@zyweb/shared/data-access/model/lvms';

export const vehicleCreatreInformationFormNext = createAction(
  '[Vehicle Cretate] Vehicle Creatre Form Next',
  props<{ vehicleInformation: VehicleInformation }>()
);
