import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as NgrxErrorActions from './ngrx-error.actions';
import { RouteActions } from '@zyweb/shared/data-access/store/ngrx-router';

@Injectable()
export class NgrxErrorEffects {
  error401$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NgrxErrorActions.throw401Error),
      map(_ => RouteActions.go({ to: { path: ['/login'] } })),
    ),
  );

  error404$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NgrxErrorActions.throw404Error),
      map(_ => RouteActions.go({ to: { path: ['/404'] } })),
    ),
  );

  constructor(private actions$: Actions) {}
}
