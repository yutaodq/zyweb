// import { Injectable, OnInit } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import { Observable, Subscription } from 'rxjs';
// import { EntityCollectionService, EntityServices } from '@ngrx/data';
//
// import * as fromVehicleUseStae from '@zyweb/vehicle/use-state/data-access/store';
// import { Sandbox } from '@zyweb/shared/data-access/facades/base';
// import { VehicleUseState} from '@zyweb/shared/data-access/model/lvms';
// import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';
//
// @Injectable()
// export class VehicleUseStateFacade extends Sandbox{
//   private _collectionService: EntityCollectionService<VehicleUseState>
//   private subscriptions: Array<Subscription> = [];
//
//   constructor(
//     private _appState$: Store<fromVehicleUseStae.State>,
//     entityServices: EntityServices
//   ) {
//     super(_appState$);
//     this._collectionService = entityServices.getEntityCollectionService('VehicleUseState');
//
//     this.registerEvents();
//   }
//
//   get loading$() {
//     return this._collectionService.loading$;
//   }
//   get vehicles$(): Observable<VehicleUseState[]> {
//     return this._collectionService.entities$;
//   }
//
//   get vehicleDetail$(): Observable<VehicleUseState> {
//     return this._collectionService.selected$;
//   }
//
//   /**
//    * Loads vehicle from the server
//    */
//
//   public unregisterEvents() {
//     this.subscriptions.forEach((sub) => sub.unsubscribe());
//   }
//
//   /**
//    * Subscribes to events
//    */
//   private registerEvents(): void {
//     this._collectionService.getAll();
//   }
//
//   private routeTo(param: { path: (string)[] }) {
//     this._appState$.dispatch(RouteActions.go({ to: param }));
//   }
//
//   showDetail(vehicle: VehicleUseState) {
//     this.routeTo({ path: ['vehicleUseState', vehicle.id, 'detail'] });
//
//   }
//
//   returnToList() {
//     this.routeTo({ path: ['vehicleUseState', 'list'] });
//   }
//
//
//   createVehicle() {
//     this.routeTo({ path: ['vehicleUseState', 'create'] });
//
//   }
//
//
//   cancelCreate() {
//     this._appState$.dispatch(RouteActions.back());
//   }
//
//   removeDetail(vehicleUseState: VehicleUseState) {
//     return this._collectionService.delete(vehicleUseState);
//   }
//
//   addVehicle(vehicleUseState: VehicleUseState) {
//     return this._collectionService.add(vehicleUseState);
//
//   }
//
//   updateVehicle(vehicleUseState: VehicleUseState) {
//     return this._collectionService.update(vehicleUseState);
//
//   }
// }
