import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromVehicle from '@zyweb/vehicle/vehicle/data-access/store';
import { Router } from '@angular/router';
import { Sandbox } from '@zyweb/shared/data-access/facade/base';
import { go, back } from '@zyweb/shared/data-access/store/ngrx-router';
import { Vehicle} from '@zyweb/shared/data-access/model/lvms';
import { Update } from '@ngrx/entity';
import { VehicleCollectionService } from './vehicle-collection.service';

// import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
// export class VehicleCollectionService extends EntityCollectionServiceBase<Vehicle> {
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
//     super('Vehicle', serviceElementsFactory);
//   }
// }

@Injectable()
export class VehicleFacade extends Sandbox{
  loading$: Observable<boolean>;
  vehicles$: Observable<Vehicle[]>;

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<fromVehicle.State>,
    private _router: Router,
    private _collectionService: VehicleCollectionService
  ) {
    super(appState$);
  this.vehicles$ = _collectionService.entities$;
    this.loading$ = _collectionService.loading$
    console.log('ddddddddddddddddngOnInitngOnInit');
    this.getVehicles();

    this.registerEvents();
  }

  getVehicles() {
    this._collectionService.getAll();
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
