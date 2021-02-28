/*
https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app

 */
import { CommonModule } from '@angular/common';
import { NgModule, Optional, Self } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { CustomSerializer } from './+state/custom-serializer';
import { RouterEffects } from './+state/router.effects';
// import { ngrxRouterFeatureKey } from './+state/router.interfaces';
import { routerStateConfig } from './+state/router-state.config';
import { Router } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(routerStateConfig.stateKey, routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot(routerStateConfig),
  ],
  providers: [RouterEffects, [{ provide: RouterStateSerializer, useClass: CustomSerializer }]],
})
export class SharedDataAccessStoreNgrxRouterModule {

  constructor(@Self() @Optional() router: Router) {
    if (!router) {
      console.error('SharedDataAccessStoreNgrxRouterModule must be imported in the same same level as RouterModule');
    }
  }

}
