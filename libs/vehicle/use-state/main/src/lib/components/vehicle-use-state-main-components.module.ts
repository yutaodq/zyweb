import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseStateGridModule } from './grid';
import { VehicleUseStateDetailFormModule } from './details-form';
import { VehicleUseSataeDetailButtonModule } from './details-button';
import { VehicleUseStateCreateFormModule } from './create-form';
import { VehicleUseStateUpdateFormModule } from './update-form';

export const COMPONENTS_EXPORTS : Array<any> = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [...COMPONENTS_EXPORTS,
    VehicleUseStateGridModule,
    VehicleUseStateDetailFormModule,
    VehicleUseSataeDetailButtonModule,
    VehicleUseStateCreateFormModule,
    VehicleUseStateUpdateFormModule,
  ],

  entryComponents: [
  ]
})
export class VehicleUseStateMainComponentsModule {}

