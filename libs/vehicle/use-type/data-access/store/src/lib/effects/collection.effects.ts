import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  CollectionApiActions,
  CollectionPageActions, OldVehicleUseTypeActions
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
  constructor(
    private actions$: Actions,
    private apiClient: VehicleUseTypesApiClient
  ) {}

}
