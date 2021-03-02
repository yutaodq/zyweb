import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

import * as fromVehicle from '@zyweb/vehicle/vehicle/data-access/store';
import { Router } from '@angular/router';
import { Sandbox } from '@zyweb/shared/data-access/facade/base';
import { Vehicle} from '@zyweb/shared/data-access/model/lvms';
import { Update } from '@ngrx/entity';
import { VehicleCollectionService } from './vehicle-collection.service';
import { take } from 'rxjs/operators';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

@Injectable()
export class VehicleFacade extends Sandbox{
  private _collectionService: EntityCollectionService<Vehicle>
  private subscriptions: Array<Subscription> = [];

  constructor(
    private _appState$: Store<fromVehicle.State>,
    entityServices: EntityServices
  ) {
    super(_appState$);
    this._collectionService = entityServices.getEntityCollectionService('Vehicle');

    this.registerEvents();
  }

  get loading$() {
    return this._collectionService.loading$;
  }
  get vehicles$(): Observable<Vehicle[]> {
    return this._collectionService.entities$;
  }

  get vehicleDetail$(): Observable<Vehicle> {
    return this._collectionService.selected$.pipe(
      take(1),
    )
  }

  /**
   * Loads vehicles from the server
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

  showDetail(vehicle: Vehicle) {
    this.routeTo({ path: ['vehicles', vehicle.id, 'detail'] });

  }

  returnToList() {
    this.routeTo({ path: ['vehicles', 'list'] });
  }


  createVehicle() {
    this.routeTo({ path: ['vehicles', 'create'] });

  }


  cancelCreate() {
    this._appState$.dispatch(RouteActions.back());
  }

  removeDetail(vehicle: Vehicle) {
    return this._collectionService.delete(vehicle);
  }
}
