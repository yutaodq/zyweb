import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypeDetailsToolbarComponent } from './vehicle-use-type-details-toolbar.component';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeDetailsToolbarComponent
];

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
  ],
  declarations: [VehicleUseTypeDetailsToolbarComponent

  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentsDetailToolbarModule {}

