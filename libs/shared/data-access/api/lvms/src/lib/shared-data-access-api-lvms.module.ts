import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from './api';
import { VehicleDataService } from './vehicle/vehicle-data-service';
import { DefaultDataServiceConfig,
  ENTITY_METADATA_TOKEN,
  EntityDataService,
  PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { defaultDataServiceConfig } from './data/data-service.config';
import { entityMetadata, pluralNames } from './data/app-entity-metadata.config';

@NgModule({
  imports: [CommonModule, ApiModule],
  providers: [
    // { provide: PLURAL_NAMES_TOKEN, multi: true, useValue: pluralNames },
    { provide: ENTITY_METADATA_TOKEN, multi: true, useValue: entityMetadata },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    // VehicleDataService
  ]
})
export class SharedDataAccessApiLvmsModule {
  constructor(
    // entityDataService: EntityDataService,
    // vehicleDataService: VehicleDataService
  ) {
    // entityDataService.registerService('Vehicle', vehicleDataService);
  }

}
