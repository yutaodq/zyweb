import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  VehicleUseTypeActions,
} from '../actions';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class VehicleUseTypeEffects {

  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleUseTypeActions.loadVehicleUseTypes),
      switchMap(() =>
        this.apiClient.getCollection().pipe(
          map((useTypes: VehicleUseType[]) =>
            VehicleUseTypeActions.loadVehicleUseTypesSuccess({ useTypes })
          ),
          catchError((error) =>
            of(VehicleUseTypeActions.loadVehicleUseTypesSuccess( error ))
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
