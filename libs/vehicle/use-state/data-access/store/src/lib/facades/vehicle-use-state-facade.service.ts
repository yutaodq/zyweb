import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

import * as fromStaes from '../reducers';
import { map } from 'rxjs/operators';

@Injectable()
export class VehicleUseStateFacade {
  private _collectionService: EntityCollectionService<VehicleUseState>;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private _appState$: Store<fromStaes.State>,
    entityServices: EntityServices
  ) {
    this._collectionService = entityServices.getEntityCollectionService('VehicleUseState');

    this.registerEvents();
  }

  get loading$() {
    return this._collectionService.loading$;
  }

  get entities$(): Observable<VehicleUseState[]> {
    return this._collectionService.entities$;
  }


  get detail$(): Observable<VehicleUseState> {
    return this._collectionService.selected$;
  }

  findId(id: string): string {
    let useStateName;
    this._collectionService.getByKey(id).pipe(map(vehicleUseState => vehicleUseState.name))
      .subscribe(name => useStateName = name);
    return useStateName;
  }

  get vehicleUseStates$(): Observable<VehicleUseState[]> {
    return this._collectionService.entities$;
  }

  get vehicleUseStateDetail$(): Observable<VehicleUseState> {
    return this._collectionService.selected$;
  }

  /**
   * Loads vehicleUseState from the server
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
    this.routeTo({ path: ['vehicleUseState', id, 'detail'] });
  }

  returnToList() {
    this.routeTo({ path: ['vehicleUseState', 'list'] });
  }


  create() {
    this.routeTo({ path: ['vehicleUseState', 'create'] });

  }


  cancelCreate() {
    this._appState$.dispatch(RouteActions.back());
  }

  removeDetail(vehicleUseState: VehicleUseState) {
    return this._collectionService.delete(vehicleUseState);
  }

  add(vehicleUseState: VehicleUseState) {
    return this._collectionService.add(vehicleUseState);

  }

  update(vehicleUseState: VehicleUseState) {
    return this._collectionService.update(vehicleUseState);

  }
}
