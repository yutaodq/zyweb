import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from './api';
import { VehicleDataService } from './vehicles/vehicle-data-service';
import { DefaultDataServiceConfig, ENTITY_METADATA_TOKEN, EntityDataService } from '@ngrx/data';
import { defaultDataServiceConfig } from './data-service.config';

@NgModule({
  imports: [CommonModule, ApiModule],
  providers: [
    // { provide: ENTITY_METADATA_TOKEN, multi: true, useValue: vehicleEntityMetadata },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    VehicleDataService
  ]
})
export class SharedDataAccessApiLvmsModule {
  constructor(
    entityDataService: EntityDataService,
    vehicleDataService: VehicleDataService
  ) {
    entityDataService.registerService('Vehicle', vehicleDataService);
  }

}
