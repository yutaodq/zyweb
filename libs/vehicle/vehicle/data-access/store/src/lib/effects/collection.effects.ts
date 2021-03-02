import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import {
  CollectionPageActions,
} from '../actions';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import * as RouterAction from '@zyweb/shared/data-access/store/ngrx-router';

@Injectable()
export class CollectionEffects {

  removeVehicleUseTypeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionApiActions.removeVehicleUseTypeSuccess),
      map(() => RouterAction.go({ to: { path: ['vehicles', 'list'] } }
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
  ) {
  }

}
