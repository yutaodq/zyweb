import { Injectable } from '@angular/core';
import {  EntityServicesBase, EntityServicesElements } from '@ngrx/data';
import { VehicleCollectionService } from './vehicles/vehicle-collection.service';
import { VehicleUseStateCollectionService } from './vehicle-use-state/vehicle-use-state-collection.service';
import { VehicleUseTypeCollectionService } from './vehicle-use-type/vehicle-use-type-collection.service';

@Injectable()

export class AppEntityServices extends EntityServicesBase {
  constructor(
    elements: EntityServicesElements,
    // 注入自定义服务，在EntityServices中注册它们，并在API中公开.
    readonly vehicleCollectionService: VehicleCollectionService,
    readonly vehicleUseStateCollectionService: VehicleUseStateCollectionService,
    readonly vehicleUseTypeCollectionService: VehicleUseTypeCollectionService,

  ) {
    super(elements);
    this.registerEntityCollectionServices([
      vehicleCollectionService,
      vehicleUseStateCollectionService,
      vehicleUseTypeCollectionService
    ]);
  }

  // /** get the (default) SideKicks service */
  // get sideKicksService() {
  //   return this.getEntityCollectionService<SideKick>('SideKick');
  // }
}
