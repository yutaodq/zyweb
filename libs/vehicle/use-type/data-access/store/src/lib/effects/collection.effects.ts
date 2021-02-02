import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  CollectionApiActions,
  CollectionPageActions,
  NewVehicleUseTypePageActions,
  ViewVehicleUseTypePageActions
} from '../actions';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class CollectionEffects {

  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionPageActions.loadVehicleUseTypes),
      switchMap(() =>
        this.apiClient.getCollection().pipe(
          map((vehicleUseTypes: VehicleUseType[]) =>
            CollectionApiActions.loadVehicleUseTypesSuccess( {vehicleUseTypes} )
          ),
          catchError((error) =>
            of(CollectionApiActions.loadVehicleUseTypesFailure( error ))
          )
        )
      )
    )
  );

  // addVehicleUseTypeToCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(NewVehicleUseTypePageActions.addVehicleUseType),
  //     mergeMap(({ vehicleUseTypes }) =>
  //       this.apiClient.addToCollection([book]).pipe(
  //         map(() => CollectionApiActions.addBookSuccess({ book })),
  //         catchError(() => of(CollectionApiActions.addBookFailure({ book })))
  //       )
  //     )
  //   )
  // );

  removeVehicleUseTypeFromCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewVehicleUseTypePageActions.removeVehicleUseType),
      mergeMap(({ vehicleUseType }) =>
        this.apiClient.getRemoveVehicleUseType(vehicleUseType.id).pipe(
          map(() => CollectionApiActions.removeVehicleUseTypeSuccess({ vehicleUseType })),
          catchError(() => of(CollectionApiActions.removeVehicleUseTypeFailure({ vehicleUseType })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiClient: VehicleUseTypesApiClient
  ) {}

}
