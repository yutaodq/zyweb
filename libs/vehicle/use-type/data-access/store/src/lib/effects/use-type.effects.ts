import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  OldVehicleUseTypeActions,
} from '../actions';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class VehicleUseTypeEffects {

  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OldVehicleUseTypeActions.loadVehicleUseTypes),
      switchMap(() =>
        this.apiClient.getCollection().pipe(
          map((useTypes: VehicleUseType[]) =>
            OldVehicleUseTypeActions.loadVehicleUseTypesSuccess({ useTypes })
          ),
          catchError((error) =>
            of(OldVehicleUseTypeActions.loadVehicleUseTypesSuccess( error ))
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
