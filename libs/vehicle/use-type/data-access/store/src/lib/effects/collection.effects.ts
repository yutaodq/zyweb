import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';


import { EntityAction, EntityOp, ofEntityOp, ofEntityType } from '@ngrx/data';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

const ENTITY_NAME = 'VehicleUseType';

@Injectable()
export class CollectionEffects {

  handleDeleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType(ENTITY_NAME),
      ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS),
      switchMap(() => ([
          RouteActions.go({ to: { path: ['vehicleUseType', 'list'] } })
        ])
      )
    )
  );
  handleAddTypeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType(ENTITY_NAME),
      ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS),
      switchMap((action: EntityAction) => ([
          RouteActions.go({ to: { path: ['vehicleUseType', action.payload.data.id, 'detail'] } })
        ])
      )
    )
  );

  constructor(
    private actions$: Actions
  ) {
  }

}
