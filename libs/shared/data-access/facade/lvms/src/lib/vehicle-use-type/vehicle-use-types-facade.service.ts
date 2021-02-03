import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import * as fromVehicleUseTypes from '@zyweb/vehicle/use-type/data-access/store';
import { Router } from '@angular/router';
import { Sandbox } from '@zyweb/shared/data-access/facade/base';
import { go } from '@zyweb/shared/data-access/store/ngrx-router';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class VehicleUseTypesFacade extends Sandbox {
  public vehicleUseTypes$ = this.appState$.pipe(
    select(fromVehicleUseTypes.CollectionSelectors.selectVehicleUseTypeCollection));
  public vehicleUseTypesLoading$ = this.appState$.pipe(
    select(fromVehicleUseTypes.CollectionSelectors.selectCollectionLoading));
  public vehicleUseTypesLoaded$ = this.appState$.pipe(
    select(fromVehicleUseTypes.CollectionSelectors.selectCollectionLoaded));

  public vehicleUseTypeDetails$ = this.appState$.pipe(
    select(fromVehicleUseTypes.VehicleUseTypeSelectors.selectSelectedVehicleUseType));

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<fromVehicleUseTypes.State>,
    private _router: Router
  ) {
    super(appState$);
    this.dispatchLoadVehicleUseTypes();
    this.registerEvents();
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

  showDetail(vehicleUseType: VehicleUseType) {
    this.routeTo({ path: ['vehicleUseTypes', vehicleUseType.id, 'detail'] });

  }

  returnToList() {
    this.routeTo({ path: ['vehicleUseTypes', 'list'] });
  }

  public removeDetail(vehicleUseType: VehicleUseType) {
    this.appState$.dispatch(
      fromVehicleUseTypes
        .ViewVehicleUseTypePageActions
        .removeVehicleUseType({ vehicleUseType }));
  }

  createVehicleUseType() {
    this.routeTo({ path: ['vehicleUseTypes', 'create'] });

  }
}
