import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicles from './reducers';
import { CollectionEffects, CreateEffects } from './effects';
import { VehicleApiClient } from '@zyweb/shared/data-access/api/lvms';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromVehicles.vehiclesFeatureKey, fromVehicles.reducers),
    EffectsModule.forFeature([
      CollectionEffects,
      CreateEffects
    ]),
  ],
  providers: [VehicleApiClient]
})

export class VehicleDataAccessStoreModule {}
