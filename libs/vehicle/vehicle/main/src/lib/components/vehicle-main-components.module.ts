import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleGridModule } from './grid';
import { VehicleUseTypeMainComponentDetailFormModule } from './details-form';
import { VehicleUseTypeMainComponentCreateFormModule } from './create-form';
import { VehicleUseTypeMainComponentDetailButtonModule } from './details-button';
import { VehicleUseTypeMainComponentUpdateFormModule } from './update-form';

export const COMPONENTS_EXPORTS : Array<any> = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [...COMPONENTS_EXPORTS,
    VehicleGridModule,
    VehicleUseTypeMainComponentDetailFormModule,
    VehicleUseTypeMainComponentUpdateFormModule,
    VehicleUseTypeMainComponentCreateFormModule,
    VehicleUseTypeMainComponentDetailButtonModule,
  ],

  entryComponents: [
  ]
})
export class VehicleMainComponentsModule {}

