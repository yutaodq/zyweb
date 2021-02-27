import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleGridModule } from './grid';

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
  ],

  entryComponents: [
  ]
})
export class VehicleMainComponentsModule {}

