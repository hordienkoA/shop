import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState, getRouterSelectors } from '@ngrx/router-store';

import { RouterStateUrl } from './router.state';

const routerFeatureKey = 'router';
export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);

export const {
  selectQueryParams, // select the current route query params
  selectRouteParams, // select the current route params
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getRouterSelectors(selectRouterState);

export const selectRouteParam = (param: string) => createSelector(
  selectRouterState,
  (routerState: RouterReducerState<any>) => {
    const state = routerState.state;
    return state ? state.root.firstChild?.params[param] : null;
  }
);



