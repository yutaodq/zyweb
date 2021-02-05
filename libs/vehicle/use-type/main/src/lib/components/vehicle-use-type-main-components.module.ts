import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypeGridModule } from './grid';
import { VehicleUseTypeMainComponentDetailFormModule } from './details-form';
// import { VehicleUseTypeMainComponentsDetailToolbarModule } from './details-toolbar';
import { VehicleUseTypeMainComponentCreateFormModule } from './create-form';
import { VehicleUseTypeMainComponentUpdateButtonModule } from './update-button';

export const COMPONENTS_EXPORTS : Array<any> = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [...COMPONENTS_EXPORTS,
    VehicleUseTypeGridModule,
    VehicleUseTypeMainComponentDetailFormModule,
    // VehicleUseTypeMainComponentsDetailToolbarModule,
    VehicleUseTypeMainComponentCreateFormModule,
    VehicleUseTypeMainComponentUpdateButtonModule,
  ],

  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentsModule {}

