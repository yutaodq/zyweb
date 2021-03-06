import { Injectable, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

import {
  Vehicle,
  VehicleInformation,
  VehicleParameter,
  VehicleSpecial,
  VehicleStructure
} from '@zyweb/shared/data-access/model/lvms';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';
import * as fromStates from '../reducers';
import { map } from 'rxjs/operators';
import { VehicleCreateActions } from '../actions';
import * as fromSelectors from '../selectors';
import { VehicleApiClient } from '@zyweb/shared/data-access/api/lvms';

export enum UpdateType {
  UPDATE = 'update',
  UPDATE_NAME = 'updateName',
}


@Injectable()
export class VehicleFacade {
  private _collectionService: EntityCollectionService<Vehicle>;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private _appState$: Store<fromStates.State>,
    private _vehicleApiClient: VehicleApiClient,
    entityServices: EntityServices
  ) {
    this._collectionService =
      entityServices.getEntityCollectionService('Vehicle');

    this.registerEvents();
  }

  get loading$() {
    return this._collectionService.loading$;
  }

  get entities$(): Observable<Vehicle[]> {
    return this._collectionService.entities$;
  }

  getAll(): Observable<Vehicle[]> {
    return this._collectionService.getAll();
  }

  get detail$(): Observable<Vehicle> {
    return this._collectionService.selected$;
  }

  findId(id: string): string {
    let useStateName;
    this._collectionService.getByKey(id).pipe(map(vehicle => vehicle.name))
      .subscribe(name => useStateName = name);
    return useStateName;
  }

  // get vehicles$(): Observable<Vehicle[]> {
  //   return this._collectionService.entities$;
  // }


  /**
   * Loads information from the server
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
    this.routeTo({ path: ['vehicle', id, 'detail'] });
  }

  returnToList() {
    this.routeTo({ path: ['vehicle', 'list'] });
  }

/*
 create start
 */
  create() {
    this.routeTo({ path: ['vehicle', 'create'] });

  }
  createInformationFormNext(vehicleInformation: VehicleInformation) {
    this.dispatchCreateInformation(vehicleInformation);
    this.routeTo({ path: ['vehicle', 'create', 'createStructure'] });
  }
  private dispatchCreateInformation(vehicleInformation: VehicleInformation) {
    this._appState$.dispatch(VehicleCreateActions.vehicleCreateInformationFormNext({ vehicleInformation: vehicleInformation }));
  }

  createStructureFormPrevious(vehicleStructure: VehicleStructure) {
    this.dispatchCreateStructure(vehicleStructure);
    this.routeTo({ path: ['vehicle', 'create', 'createInformation'] });
  }
  private dispatchCreateStructure(vehicleStructure: VehicleStructure) {
    this._appState$.dispatch(VehicleCreateActions.vehicleCreateStructureForm({ vehicleStructure: vehicleStructure }));
  }

  createStructureFormNext(vehicleStructure: VehicleStructure) {
    this.dispatchCreateStructure(vehicleStructure);
    this.routeTo({ path: ['vehicle', 'create', 'createParameter'] });
  }


  creatreParameterFormPrevious(vehicleParameter: VehicleParameter) {
    this.dispatchCreateParameter(vehicleParameter);
    this.routeTo({ path: ['vehicle', 'create', 'createStructure'] });
  }
  private dispatchCreateParameter(vehicleParameter: VehicleParameter) {
    this._appState$.dispatch(VehicleCreateActions.vehicleCreateParameterForm({ vehicleParameter: vehicleParameter }));
  }

  createParameterFormNext(vehicleParameter: VehicleParameter) {
    this.dispatchCreateParameter(vehicleParameter);
    this.routeTo({ path: ['vehicle', 'create', 'createSpecial'] });
  }

  createSpecialFormPrevious(vehicleSpecial: VehicleSpecial) {
    this.dispatchCreateSpecia(vehicleSpecial);
    this.routeTo({ path: ['vehicle', 'create', 'createParameter'] });
  }
  private dispatchCreateSpecia(vehicleSpecial: VehicleSpecial) {
    this._appState$.dispatch(VehicleCreateActions.vehicleCreateSpecialForm({ vehicleSpecial: vehicleSpecial }));
  }

  createSpecialFormNext(vehicleSpecial: VehicleSpecial) {
    this.dispatchCreateSpecia(vehicleSpecial);
    this.routeTo({ path: ['vehicle', 'create', 'createConfirmation'] });
  }

  createConfirmationFormPrevious() {
    this.routeTo({ path: ['vehicle', 'create', 'createSpecial'] });
  }



  cancelCreate() {
    this._appState$.dispatch(RouteActions.back());
  }

  add() {
    this._appState$.dispatch(VehicleCreateActions.vehicleCreateConfirmationFormSave());
  }

createSave() {
    let information: VehicleInformation;
  let structure: VehicleStructure;
  let parameter: VehicleParameter;
  let special: VehicleSpecial;


  const information$ = this._appState$.pipe(select(fromSelectors.CreateSelectors.selectVehicleInformation));
  const structure$ = this._appState$.pipe(select(fromSelectors.CreateSelectors.selectVehicleStructure));
  const parameter$ = this._appState$.pipe(select(fromSelectors.CreateSelectors.selectVehicleParameter));
  const special$ = this._appState$.pipe(select(fromSelectors.CreateSelectors.selectVehicleSpecial));

  information$.pipe(map(infor => {
    console.log('新纪录：' + infor.pz);

    information = infor;
  } )).subscribe();
  structure$.pipe(map(stru =>{

    structure = stru
  } )).subscribe();
  parameter$.pipe(map(para => parameter = para )).subscribe();
  special$.pipe(map(spec => special = spec )).subscribe();
  const vehicle: VehicleInformation = {...information, structure, parameter, special};
  // vehicle.structure = structure;
  // vehicle.parameter = parameter;
  // vehicle.special = special;
  console.log('新纪录structure：' + structure.cc);

  console.log('新纪录pz：' + vehicle.pz);
  console.log('新纪录cc：' + vehicle.structure.cc);

  return this._vehicleApiClient.addVehicle(vehicle);
}
  /*
create end
 */
  removeDetail(vehicle: Vehicle) {
    return this._collectionService.delete(vehicle);
  }


  update(vehicle: Vehicle) {
    return this.updateVehicle(vehicle, UpdateType.UPDATE);
  }

  private updateVehicle(vehicle: Vehicle, update: string) {
    const state: Vehicle = {...vehicle, updateType: update}
    return this._collectionService.update(state);
  }
  updateName(vehicle: Vehicle) {
    return this.updateVehicle(vehicle, UpdateType.UPDATE_NAME);
  }

}
