import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';
import * as fromStaes from '../reducers';

@Injectable()
export class VehicleFacade{
  private _collectionService: EntityCollectionService<Vehicle>;

  private subscriptions: Array<Subscription> = [];

  constructor(
    private _appState$: Store<fromStaes.State>,
    entityServices: EntityServices
  ) {
    this._collectionService = entityServices.getEntityCollectionService('Vehicle');
    this.registerEvents();
  }

  get loading$() {
    return this._collectionService.loading$;
  }

  get vehicles$(): Observable<Vehicle[]> {
    return this._collectionService.entities$;
  }
  get entities$(): Observable<Vehicle[]> {
    return this._collectionService.entities$;
  }

  get vehicleDetail$(): Observable<Vehicle> {
    return this._collectionService.selected$;
  }

  get detail$(): Observable<Vehicle> {
    return this._collectionService.selected$;
  }

  /**
   * Loads vehicle from the server
   */

  public unregisterEvents() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
    this._collectionService.getAll();
  }

  private routeTo(param: { path: (string)[] }) {
    this._appState$.dispatch(RouteActions.go({ to: param }));
  }

  showDetail(id: string) {
    // showDetail(vehicle: Vehicle) {
    // this.routeTo({ path: ['vehicle', vehicle.id, 'detail'] });
    this.routeTo({ path: ['vehicle', id, 'detail'] });

  }

  returnToList() {
    this.routeTo({ path: ['vehicle', 'list'] });
  }


  createVehicle() {
    this.routeTo({ path: ['vehicle', 'create'] });

  }


  cancelCreate() {
    this._appState$.dispatch(RouteActions.back());
  }

  removeDetail(vehicle: Vehicle) {
    return this._collectionService.delete(vehicle);
  }

  addVehicle(vehicle: Vehicle) {
    return this._collectionService.add(vehicle);

  }

  updateVehicle(vehicle: Vehicle) {
    return this._collectionService.update(vehicle);

  }
}
