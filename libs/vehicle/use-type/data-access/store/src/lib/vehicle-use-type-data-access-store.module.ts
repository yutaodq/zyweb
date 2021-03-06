import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicleUseType from './reducers';
import { CollectionEffects } from './effects';
import { VehicleUseTypeDataService } from '@zyweb/shared/data-access/api/lvms';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromVehicleUseType.vehicleUseTypesFeatureKey, fromVehicleUseType.reducers),
    EffectsModule.forFeature([CollectionEffects ]),
  ],
  providers: [VehicleUseTypeDataService]
})

export class VehicleUseTypeDataAccessStoreModule {}
