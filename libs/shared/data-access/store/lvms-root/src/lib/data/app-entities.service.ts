// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { EntityCache, EntityCollectionServiceFactory, EntityServicesBase, EntityServicesElements } from '@ngrx/data';
// import { VehicleUseStateCollectionService } from '@zyweb/shared/data-access/facades/lvms';
//
// @Injectable()
//
// export class AppEntityServices extends EntityServicesBase {
//   constructor(
//     elements: EntityServicesElements,
//     // 注入自定义服务，在EntityServices中注册它们，并在API中公开.
//     readonly vehicleCollectionService: VehicleUseStateCollectionService
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
