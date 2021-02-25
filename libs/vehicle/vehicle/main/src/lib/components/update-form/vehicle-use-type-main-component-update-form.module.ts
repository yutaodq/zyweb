import { NgModule } from '@angular/core';
import { UpdateNameFormModule } from './update/update-name-form.module';

export const MODULE_EXPORTS : Array<any> = [
  UpdateNameFormModule
];

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [...MODULE_EXPORTS],
})
export class VehicleUseTypeMainComponentUpdateFormModule {}

