import { ActivatedRouteSnapshot, Data, Params, RouterStateSnapshot } from '@angular/router';
// import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { RouterStateUrl } from './router.interfaces';
import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';

// @Injectable()
// export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
//   serialize(routerState: RouterStateSnapshot): RouterStateUrl {
//     const { url } = routerState;
//     const { queryParams } = routerState.root;
//
//     let state: ActivatedRouteSnapshot = routerState.root;
//     while (state.firstChild) {
//       state = state.firstChild;
//     }
//     const { params } = state;
//
//     return { url, queryParams, params,
//     data: mergeRouteData(routerState.root)};
//   }
// }

/*
   学习 ：https://github.com/ebertsch/avengers-gg
  avengers-gg-develop\libs\shared\router\src\lib\merged-route-serialzer.ts
 */
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    return {
      url: routerState.url,
      params: mergeRouteParams(routerState.root, r => r.params),
      queryParams: mergeRouteParams(routerState.root, r => r.queryParams),
      data: mergeRouteData(routerState.root)
    };
  }
}

function mergeRouteParams(route: ActivatedRouteSnapshot, getter: (r: ActivatedRouteSnapshot) => Params): Params {
  if (!route) {
    return {};
  }
  const currentParams = getter(route);
  const primaryChild = route.children.find(c => c.outlet === 'primary') || route.firstChild;
  return {...currentParams, ...mergeRouteParams(primaryChild, getter)};
}



function mergeRouteData(route: ActivatedRouteSnapshot): Data {
  if (!route) {
    return {};
  }

  const currentData = route.data;
  const primaryChild = route.children.find(c => c.outlet === 'primary') || route.firstChild;
  return {...currentData, ...mergeRouteData(primaryChild)};
}
