import { Params, NavigationExtras, Data } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

// export const ngrxRouterFeatureKey = 'router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;

}

// export interface RouterState {
//   readonly [ngrxRouterFeatureKey]: fromRouter.RouterReducerState<RouterStateUrl>;
// }

export type MergedRouteReducerState = RouterReducerState<RouterStateUrl>;

export interface NgrxRoute {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}
