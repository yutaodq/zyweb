import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EntityAction, EntityOp, ofEntityOp, ofEntityType } from '@ngrx/data';
import { take, tap, switchMap, map, mergeMap } from 'rxjs/operators';

import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

import {
  VehicleCreateActions
} from '../actions';
import { VehicleFacade } from '../facades';

@Injectable()
export class CreateEffects {

  addBookToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleCreateActions.vehicleCreateConfirmationFormSave),
      mergeMap(() => this._vehicleFacade.createSave().pipe(
        map(() => ({type: 'NOOP_ACTION'})
        )
        )
      )
    )
  );

  // addBookToCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SelectedBookPageActions.addBook),
  //     mergeMap(({ book }) =>
  //       this.storageService.addToCollection([book]).pipe(
  //         map(() => CollectionApiActions.addBookSuccess({ book })),
  //         catchError(() => of(CollectionApiActions.addBookFailure({ book })))
  //       )
  //     )
  //   ) console.log('dsfff')
  // );

  constructor(
    private actions$: Actions,
    private _vehicleFacade: VehicleFacade
  ) {
  }

}
