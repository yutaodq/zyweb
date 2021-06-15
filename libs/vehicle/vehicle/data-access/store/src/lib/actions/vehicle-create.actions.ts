import { createAction, props } from '@ngrx/store';
import { VehicleInformation,
  VehicleParameter,
  VehicleStructure,
  VehicleSpecial
} from '@zyweb/shared/data-access/model/lvms';


export const vehicleCreateInformationFormNext = createAction(
  '[Vehicle Create] Vehicle Information Form Next',
  props<{ vehicleInformation: VehicleInformation }>()
);

export const vehicleCreateStructureForm = createAction(
  '[Vehicle Create] Vehicle Structure Form ',
  props<{ vehicleStructure: VehicleStructure }>()
);

export const vehicleCreateParameterForm = createAction(
  '[Vehicle Create] Vehicle Parameter Form ',
  props<{ vehicleParameter: VehicleParameter }>()
);

export const vehicleCreateSpecialForm = createAction(
  '[Vehicle Create] Vehicle Special Form ',
  props<{ vehicleSpecial: VehicleSpecial }>()
);

export const vehicleCreateConfirmationFormSave = createAction(
  '[Vehicle Create] Vehicle Confirmation Form Save',
);
