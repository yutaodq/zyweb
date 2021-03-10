import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

import { VehicleUseType} from '@zyweb/shared/data-access/model/lvms';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

import * as fromStaes from '../reducers';

@Injectable()
export class VehicleUseTypeFacade {
  private _collectionService: EntityCollectionService<VehicleUseType>
  private subscriptions: Array<Subscription> = [];

  constructor(
    private _appState$: Store<fromStaes.State>,
    entityServices: EntityServices
  ) {
    this._collectionService = entityServices.getEntityCollectionService('VehicleUseType');

    this.registerEvents();
  }

  get loading$() {
    return this._collectionService.loading$;
  }
  get vehicleUseTypes$(): Observable<VehicleUseType[]> {
    return this._collectionService.entities$;
  }

  get vehicleUseTypeDetail$(): Observable<VehicleUseType> {
    return this._collectionService.selected$;
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

  showDetail(vehicleUseType: VehicleUseType) {
    this.routeTo({ path: ['vehicleUseType', vehicleUseType.id, 'detail'] });

  }

  returnToList() {
    this.routeTo({ path: ['vehicleUseType', 'list'] });
  }


  createVehicleUseType() {
    this.routeTo({ path: ['vehicleUseType', 'create'] });

  }


  cancelCreate() {
    this._appState$.dispatch(RouteActions.back());
  }

  removeDetail(vehicleUseType: VehicleUseType) {
    return this._collectionService.delete(vehicleUseType);
  }

  addVehicleUseType(vehicleUseType: VehicleUseType) {
    return this._collectionService.add(vehicleUseType);

  }

  updateVehicleUseType(vehicleUseType: VehicleUseType) {
    return this._collectionService.update(vehicleUseType);

  }
}
