import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleGridModule } from './grid';
import { VehicleDetailFormModule } from './details-form';
import { VehicleDetailButtonModule } from './details-button';

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
    VehicleDetailFormModule,
    VehicleDetailButtonModule,
  ],

  entryComponents: [
  ]
})
export class VehicleMainComponentsModule {}

