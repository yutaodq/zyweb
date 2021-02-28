import { Injectable } from '@angular/core';
import {  EntityServicesBase, EntityServicesElements } from '@ngrx/data';
import { VehicleCollectionService } from './vehicles/vehicle-collection.service';

@Injectable()

export class AppEntityServices extends EntityServicesBase {
  constructor(
    elements: EntityServicesElements,
    // 注入自定义服务，在EntityServices中注册它们，并在API中公开.
    readonly vehicleCollectionService: VehicleCollectionService
  ) {
    super(elements);
    this.registerEntityCollectionServices([
      vehicleCollectionService
    ]);
  }

  // /** get the (default) SideKicks service */
  // get sideKicksService() {
  //   return this.getEntityCollectionService<SideKick>('SideKick');
  // }
}
