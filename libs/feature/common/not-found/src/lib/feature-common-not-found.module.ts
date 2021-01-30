import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './containers';
import { RoutingModule } from './routing.module';


@NgModule({
  imports: [CommonModule,
    RoutingModule,
    ],
  exports: [

  ],
  declarations: [NotFoundPageComponent],

})
export class FeatureCommonNotFoundModule {}
