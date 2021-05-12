import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

import * as fromStaes from '../reducers';
import { map } from 'rxjs/operators';

export enum UpdateType {
  UPDATE = 'update',
  UPDATE_NAME = 'updateName',
}


@Injectable()
export class VehicleUseTypeFacade {
  private _collectionService: EntityCollectionService<VehicleUseType>;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private _appState$: Store<fromStaes.State>,
    entityServices: EntityServices
  ) {
    this._collectionService =
      entityServices.getEntityCollectionService('VehicleUseType');

    this.registerEvents();
  }

  get loading$() {
    return this._collectionService.loading$;
  }

  get entities$(): Observable<VehicleUseType[]> {
    return this._collectionService.entities$;
  }

  get detail$(): Observable<VehicleUseType> {
    return this._collectionService.selected$;
  }

  findId(id: string): string {
    let useStateName;
    this._collectionService.getByKey(id).pipe(map(vehicleUseType => vehicleUseType.name))
      .subscribe(name => useStateName = name);
    return useStateName;
  }

  get vehicleUseTypes$(): Observable<VehicleUseType[]> {
    return this._collectionService.entities$;
  }


  /**
   * Loads vehicleUseType from the server
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
    this.routeTo({ path: ['vehicleUseType', id, 'detail'] });
  }

  returnToList() {
    this.routeTo({ path: ['vehicleUseType', 'list'] });
  }


  create() {
    this.routeTo({ path: ['vehicleUseType', 'create'] });

  }


  cancelCreate() {
    this._appState$.dispatch(RouteActions.back());
  }

  removeDetail(vehicleUseType: VehicleUseType) {
    return this._collectionService.delete(vehicleUseType);
  }

  add(vehicleUseType: VehicleUseType) {
    return this._collectionService.add(vehicleUseType);

  }

  update(vehicleUseType: VehicleUseType) {
    return this.updateVehicleUseType(vehicleUseType, UpdateType.UPDATE);
  }

  private updateVehicleUseType(vehicleUseType: VehicleUseType, update: string) {
    const state: VehicleUseType = {...vehicleUseType, updateType: update}
    return this._collectionService.update(state);
  }
  updateName(vehicleUseType: VehicleUseType) {
    return this.updateVehicleUseType(vehicleUseType, UpdateType.UPDATE_NAME);
  }

}
