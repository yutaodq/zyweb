import { NgModule } from '@angular/core';
import { UpdateZtFormModule } from './zt';

export const MODULE_EXPORTS : Array<any> = [
  UpdateZtFormModule
];

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [...MODULE_EXPORTS],
})
export class VehicleUpdateFormModule {}

