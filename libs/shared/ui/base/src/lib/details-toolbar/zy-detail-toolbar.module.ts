import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsToolbarComponent } from './details-toolbar.component';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';

export const COMPONENTS_EXPORTS : Array<any> = [
  DetailsToolbarComponent
];

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TooltipModule
  ],
  declarations: [
    DetailsToolbarComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
})
export class ZyDetailToolbarModule {}

