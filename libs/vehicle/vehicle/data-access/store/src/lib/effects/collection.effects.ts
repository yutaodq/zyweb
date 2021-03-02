import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';


import { EntityOp, ofEntityOp, ofEntityType } from '@ngrx/data';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';
const ENTITY_NAME = 'Vehicle'
@Injectable()
export class CollectionEffects {

  handleDeleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType(ENTITY_NAME),
      ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS),
      switchMap(() => ([
        RouteActions.go({ to: { path: ['vehicles', 'list'] } } ),
        ])
      )
    )
  );

  constructor(
    private actions$: Actions,
  ) {
  }

}
