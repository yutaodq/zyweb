import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicleUseStates from './reducers';
import { CollectionEffects } from './effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromVehicleUseStates.vehicleUseStatesFeatureKey, fromVehicleUseStates.reducers),
    EffectsModule.forFeature([CollectionEffects ]),
  ],
  providers: []
})

export class VehicleUseStateDataAccessStoreModule {}
