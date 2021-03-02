import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import {
  CollectionPageActions,
} from '../actions';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { EntityOp, ofEntityOp, ofEntityType } from '@ngrx/data';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';
import { NotificationActions } from '@zyweb/shared/util/message';
const ENTITY_NAME = 'Vehicle'
@Injectable()
export class CollectionEffects {

  handleDeleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType('Vehicle'),
      ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS),
      switchMap(() => ([
        RouteActions.go({ to: { path: ['vehicles', 'list'] } } ),
        // NotificationActions.success({
        //   message: '你成功删除了一条记录',
        // }),
        ])
      )
    )
  );
  handleDeleteSuccessdd$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType(),
      ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS),
      switchMap(() => ([
          NotificationActions.success({
            message: '你成功删除了一条记录',
          }),
        ])
      )
    )
  );

  // public handleDeleteSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofEntityType('Product'),
  //     ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS),
  //     switchMap(() => ([
  //       RouterActions.navigate({
  //         path: ['catalog', 'dictionaries', 'products'],
  //         extras: {queryParamsHandling: 'merge', },
  //       }),
  //       NotificationActions.success({
  //         message: 'Product deleted!',
  //       }),
  //     ])),
  //   ),
  // );

  // public handleSaveSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofEntityType('Product'),
  //     ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS, EntityOp.SAVE_UPDATE_ONE_SUCCESS),
  //     switchMap(action => of(action.payload.data)),
  //     switchMap(product => ([
  //       RouterActions.navigate({
  //         path: ['catalog', 'dictionaries', 'products', product.id],
  //         extras: {
  //           queryParamsHandling: 'merge',
  //         },
  //       }),
  //       NotificationActions.success({
  //         message: 'Product saved!',
  //       }),
  //     ])),
  //   ),
  // );

  constructor(
    private actions$: Actions,
  ) {
  }

}
