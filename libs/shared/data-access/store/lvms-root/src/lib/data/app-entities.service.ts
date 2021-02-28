// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { EntityCache, EntityCollectionServiceFactory, EntityServicesBase, EntityServicesElements } from '@ngrx/data';
// import { VehicleCollectionService } from '@zyweb/shared/data-access/facade/lvms';
//
// @Injectable()
//
// export class AppEntityServices extends EntityServicesBase {
//   constructor(
//     elements: EntityServicesElements,
//     // 注入自定义服务，在EntityServices中注册它们，并在API中公开.
//     readonly vehicleCollectionService: VehicleCollectionService
//   ) {
//     super(elements);
//     this.registerEntityCollectionServices([
//       vehicleCollectionService
//     ]);
//   }
//
//   // /** get the (default) SideKicks service */
//   // get sideKicksService() {
//   //   return this.getEntityCollectionService<SideKick>('SideKick');
//   // }
// }
