import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import {  switchMap} from 'rxjs/operators';


import { EntityAction, EntityOp, ofEntityOp, ofEntityType } from '@ngrx/data';
import { NotificationActions } from '../actions';
@Injectable()
export class EntityEffects {
  handleDeleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS),
      switchMap((action: EntityAction) => ([
          NotificationActions.success({
            message: '你成功地删除了一条记录 ' + action.payload.entityName,
          }),
        ])
      )
    )
  );
  handleNewSaveSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS),
      switchMap(() => ([
          NotificationActions.success({
            message: '成功地保存了一条新创建的记录 ',
          }),
        ])
      )
    )
  );

  constructor(
    private actions$: Actions,
  ) {
  }

}
