// /*
// 学习ngrx官网案例 book
// D:\学习案例\ngrx-master\projects\example-app\src\app\books\guards\book-exists.guard.ts
//  */
// import { Injectable } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import { Observable, of, Subscription } from 'rxjs';
// import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
//
// import * as fromVehicleUseTypes from '@zyweb/information/use-type/data-access/store';
// import {  Router } from '@angular/router';
// import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';
//
// @Injectable()
// export class VehicleUseTypesExistsService  {
//   constructor(
//     protected appState$: Store<fromVehicleUseTypes.State>,
//     private  _vehicleUseTypesApiClient: VehicleUseTypesApiClient,
//     private _router: Router,
//   ) {
//   }
//   /**
//    * 这个方法创建了一个可观察对象，它等待集合状态的' loaded '属性变为' true '，
//    * 在加载完成后发出一次响应.
//    */
//   waitForCollectionToLoad(): Observable<boolean> {
//     return this.appState$.pipe(
//       select(fromVehicleUseTypes.CollectionSelectors.selectCollectionLoaded),
//       filter((loaded) => loaded),
//       take(1)
//     );
//   }
//
//   /**
//    * 该方法检查具有给定ID的图书是否已经在存储中注册
//    */
//   hasBookInStore(id: string): Observable<boolean> {
//     return this.appState$.pipe(
//       select(fromVehicleUseTypes.VehicleUseTypeSelectors.selectVehicleUseTypeEntities),
//       map((entities) => !!entities[id]),
//       take(1)
//     );
//   }
//   /**
//    * 该方法从API中加载具有给定ID的图书，并将其缓存到存储中，
//    * 如果找到它则返回' true '或' false '。
//    */
//   hasBookInApi(id: string): Observable<boolean> {
//     return this._vehicleUseTypesApiClient.getVehicleUseTypeDetails(id).pipe(
//       map((vehicleUseTypeEntity) =>
//         fromVehicleUseTypes.VehicleUseTypeActions.loadVehicleUseType(
//           { vehicleUseType: vehicleUseTypeEntity })),
//       tap((action) => this.appState$.dispatch(action)),
//       map((vehicleUseType) => !!vehicleUseType),
//       catchError(() => {
//         this._router.navigate(['/404']);
//         return of(false);
//       })
//     );
//   }
//
//   /**
//    * ' hasBook '由' hasbookstore '和' hasBookInApi '组成。
//    * 它首先检查图书是否在存储中，如果没有，则检查它是否在API中。
//    */
//   hasBook(id: string): Observable<boolean> {
//     return this.hasBookInStore(id).pipe(
//       switchMap((inStore) => {
//         if (inStore) {
//           return of(inStore);
//         }
//         return this.hasBookInApi(id);
//       })
//     );
//   }
//   canActivate(id: string): Observable<boolean> {
//     return this.waitForCollectionToLoad().pipe(
//       switchMap(() => this.hasBook(id))
//     );
//   }
//
// }
