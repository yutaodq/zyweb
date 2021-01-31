import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicleUseType from './reducers';
import { VehicleUseTypeEffects } from './effects';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';
@NgModule({
  imports: [
    CommonModule,
    // SharedVehicleDataAccesApiModule,
    StoreModule.forFeature(fromVehicleUseType.vehicleUseTypeFeatureKey, fromVehicleUseType.reducers),
    EffectsModule.forFeature([VehicleUseTypeEffects ]),
  ],
  providers: [VehicleUseTypesApiClient]
})

export class VehicleUseTypeDataAccessStoreModule {}
