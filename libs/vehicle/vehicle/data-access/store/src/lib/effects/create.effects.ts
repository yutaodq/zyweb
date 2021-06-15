import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EntityAction, EntityOp, ofEntityOp, ofEntityType } from '@ngrx/data';
import { take, tap, switchMap, map, mergeMap } from 'rxjs/operators';

import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

import {
  VehicleCreateActions
} from '../actions';

@Injectable()
export class CreateEffects {
  // handleaddCreateSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofEntityType(ENTITY_NAME),
  //     ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS),
  //     switchMap((action: EntityAction) => ([
  //         RouteActions.go({ to: { path: ['vehicle', action.payload.data.id, 'detail'] } })
  //       ])
  //     )
  //   )
  // );
  @Effect({ dispatch: false })
  addBookToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleCreateActions.vehicleCreateConfirmationFormSave),
      map(_ => {
        console.log(`BEFORE MAP`);
        return { type: 'NOOP_ACTION'};
      })
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
    private actions$: Actions
  ) {
  }

}
