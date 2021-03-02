import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import {  switchMap} from 'rxjs/operators';


import { EntityOp, ofEntityOp, ofEntityType } from '@ngrx/data';
import { NotificationActions } from '../actions';
// const ENTITY_NAME = 'Vehicle'
@Injectable()
export class EntityEffects {

  handleDeleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType(),
      ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS),
      switchMap(() => ([
          NotificationActions.success({
            message: '你成功地删除了一条记录 ',
          }),
        ])
      )
    )
  );
  handleNewSaveSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType(),
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
