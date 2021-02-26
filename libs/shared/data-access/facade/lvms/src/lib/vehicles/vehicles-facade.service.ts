import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromVehicleUseTypes from '@zyweb/vehicle/use-type/data-access/store';
import { Router } from '@angular/router';
import { Sandbox } from '@zyweb/shared/data-access/facade/base';
import { go, back } from '@zyweb/shared/data-access/store/ngrx-router';
import { Vehicle} from '@zyweb/shared/data-access/model/lvms';
import { Update } from '@ngrx/entity';
import { VehicleCollectionService } from './vehicle-collection.service';

@Injectable()
export class VehicleFacade extends Sandbox  implements OnInit{
  loading$: Observable<boolean>;
  vehicles$: Observable<Vehicle[]>;

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<fromVehicleUseTypes.State>,
    private _router: Router,
    private _collectionService: VehicleCollectionService
  ) {
    super(appState$);
  this.vehicles$ = _collectionService.entities$;
    this.loading$ = _collectionService.loading$

    this.dispatchLoadVehicleUseTypes();
    this.registerEvents();
  }

  ngOnInit() {
    this.getVehicles();
  }
  getVehicles() {
    this._collectionService.getAll();
  }
  /**
   * Loads vehicles from the server
   */
  public dispatchLoadVehicleUseTypes(): void {
    this.appState$.dispatch(
      fromVehicleUseTypes
        .CollectionPageActions
        .loadVehicleUseTypes());
  }

  public dispatchSelectVehicleUseType(id: string): void {
    this.appState$.dispatch(
      fromVehicleUseTypes
        .CollectionPageActions
        .selectVehicleUseType({ id }));
  }

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

  public removeDetail(vehicleUseType: Vehicle) {
    this.appState$.dispatch(
      fromVehicleUseTypes
        .ViewVehicleUseTypePageActions
        .removeVehicleUseType({ vehicleUseType }));
  }

  createVehicle() {
    this.routeTo({ path: ['vehicleUseTypes', 'create'] });

  }

  updateVehicleUseType(vehicleUseType: Vehicle) {
    const update: Update<Vehicle> =  { id: vehicleUseType.id, changes: vehicleUseType };
    this.appState$.dispatch(
      fromVehicleUseTypes
        .ViewVehicleUseTypePageActions
        .updateVehicleUseType(
          { vehicleUseType:  update})
    );
  }

  addVehicleUseType(vehicleUseType: Vehicle) {
    this.appState$.dispatch(
      fromVehicleUseTypes
        .NewVehicleUseTypePageActions
        .addVehicleUseType({ vehicleUseType }));
  }

  cancelCreate() {
    this.appState$.dispatch(back());
  }
}
