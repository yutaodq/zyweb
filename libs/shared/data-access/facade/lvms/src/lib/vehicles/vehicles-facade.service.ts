import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

import * as fromVehicle from '@zyweb/vehicle/vehicle/data-access/store';
import { Router } from '@angular/router';
import { Sandbox } from '@zyweb/shared/data-access/facade/base';
import { go, back } from '@zyweb/shared/data-access/store/ngrx-router';
import { Vehicle} from '@zyweb/shared/data-access/model/lvms';
import { Update } from '@ngrx/entity';
import { VehicleCollectionService } from './vehicle-collection.service';

@Injectable()
export class VehicleFacade extends Sandbox{
  vehicles$: Observable<Vehicle[]>;
  _collectionService: EntityCollectionService<Vehicle>
  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<fromVehicle.State>,
    private _router: Router,
    private entityServices: EntityServices
  ) {
    super(appState$);
    this._collectionService = entityServices.getEntityCollectionService('Vehicle');
  this.vehicles$ = this._collectionService.entities$;
    this.getVehicles();

    this.registerEvents();
  }

  getVehicles() {
    this._collectionService.getAll();
  }
  get loading$() {
    return this._collectionService.loading$;
  }
  // get vehicles$(): Observable<Vehicle[]> {
  //   return this._collectionService.entities$;
  // }

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
  }

  private routeTo(param: { path: (string)[] }) {
    this.appState$.dispatch(go({ to: param }));
  }

  showDetail(vehicleUseType: Vehicle) {
    this.routeTo({ path: ['vehicleUseTypes', vehicleUseType.id, 'detail'] });

  }

  returnToList() {
    this.routeTo({ path: ['vehicleUseTypes', 'list'] });
  }


  createVehicle() {
    this.routeTo({ path: ['vehicles', 'create'] });

  }


  cancelCreate() {
    this.appState$.dispatch(back());
  }
}
