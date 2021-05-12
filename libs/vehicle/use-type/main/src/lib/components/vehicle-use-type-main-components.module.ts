import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypeGridModule } from './grid';
import { VehicleUseTypeMainComponentDetailFormModule } from './details-form';
import { VehicleUseTypeMainComponentCreateFormModule } from './create-form';
import { VehicleUseTypeMainComponentDetailButtonModule } from './details-button';
import { VehicleUseTypeUpdateFormModule } from './update-form';

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
    VehicleUseTypeUpdateFormModule,
    VehicleUseTypeMainComponentCreateFormModule,
    VehicleUseTypeMainComponentDetailButtonModule,
  ],

  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentsModule {}

