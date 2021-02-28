import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleGridModule } from './grid';
import { VehicleDetailFormModule } from './details-form';

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
  ],

  entryComponents: [
  ]
})
export class VehicleMainComponentsModule {}

