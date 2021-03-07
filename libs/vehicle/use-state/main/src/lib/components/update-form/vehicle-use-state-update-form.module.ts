import { NgModule } from '@angular/core';
import { UpdateNameFormModule } from './name';
import { UpdateMainFormModule } from './main';

export const MODULE_EXPORTS : Array<any> = [
  UpdateMainFormModule,
  UpdateNameFormModule,
];

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [...MODULE_EXPORTS],
})
export class VehicleUseStateUpdateFormModule {}

