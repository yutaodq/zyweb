import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypeGridModule } from './grid';
import { VehicleUseTypeMainComponentDetailFormModule } from './details-form';
import { VehicleUseTypeMainComponentCreateFormModule } from './create-form';
import { VehicleUseTypeMainComponentUpdateButtonModule } from './update-button';
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
    VehicleUseTypeGridModule,
    VehicleUseTypeMainComponentDetailFormModule,
    VehicleUseTypeMainComponentUpdateFormModule,
    VehicleUseTypeMainComponentCreateFormModule,
    VehicleUseTypeMainComponentUpdateButtonModule,
  ],

  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentsModule {}

