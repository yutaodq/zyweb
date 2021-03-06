import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseStateGridModule } from './grid';
// import { VehicleDetailFormModule } from './details-form';
// import { VehicleDetailButtonModule } from './details-button';
// import { VehicleCreateFormModule } from './create-form';
// import { VehicleUpdateFormModule } from './update-form';

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
    // VehicleDetailFormModule,
    // VehicleDetailButtonModule,
    // VehicleCreateFormModule,
    // VehicleUpdateFormModule,
  ],

  entryComponents: [
  ]
})
export class VehicleUseStateMainComponentsModule {}

