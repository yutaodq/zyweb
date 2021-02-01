import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import * as fromVehicleUseTypes from '@zyweb/vehicle/use-type/data-access/store';
// import { VehicleUseType } from '@zy/model';
import { Router } from '@angular/router';
import { Sandbox } from '@zyweb/shared/data-access/facade/base';

@Injectable()
export class VehicleUseTypesFacade extends Sandbox {
  public vehicleUseTypes$ = this.appState$.pipe(select(fromVehicleUseTypes.selectAllVehicleUseTypes));
  public vehicleUseTypesLoading$       = this.appState$.pipe(select(fromVehicleUseTypes.selectVehicleUseTypesLoading ));


  // public query$ = this.appState$.pipe(select(fromVehicleUseTypes.selectVehicleUseTypesQuery));

  public vehicleUseTypesLoaded$ = this.appState$.pipe(select(fromVehicleUseTypes.selectVehicleUseTypesLoaded));

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<fromVehicleUseTypes.State>,
    private _router: Router,
  ) {
    super(appState$);
    this.loadVehicles();
    this.registerEvents();
  }

  /**
   * Loads vehicles from the server
   */
  public loadVehicles(): void {
    this.appState$.dispatch(fromVehicleUseTypes.OldVehicleUseTypeActions.loadVehicleUseTypes());
  }

  public unregisterEvents() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
  }



}
