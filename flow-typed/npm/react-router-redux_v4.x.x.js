/**
 * Flowtype definitions for react-router-redux_v4.x.x
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */
import type { Middleware, Store } from "redux";
type Action = any;

import type { Location } from "react-router";
type Path = string;
type LocationDescriptor = Path | Location;

declare module "react-router-redux" {
  declare export var CALL_HISTORY_METHOD: string;
  declare export var LOCATION_CHANGE: string;
  declare export interface LocationActionPayload {
    method: string;
    args?: any[];
  }
  declare export type RouterAction = {
    payload?: LocationActionPayload
  } & Action;
  declare export type LocationAction = (
    nextLocation: LocationDescriptor
  ) => RouterAction;
  declare export type GoAction = (n: number) => RouterAction;
  declare export type NavigateAction = () => RouterAction;
  declare export var push: LocationAction;
  declare export var replace: LocationAction;
  declare export var go: GoAction;
  declare export var goBack: NavigateAction;
  declare export var goForward: NavigateAction;
  declare export interface RouteActions {
    push: typeof push;
    replace: typeof replace;
    go: typeof go;
    goForward: typeof goForward;
    goBack: typeof goBack;
  }
  declare export var routerActions: RouteActions;
  declare export interface RouterState {
    locationBeforeTransitions: Location;
  }
  declare export type DefaultSelectLocationState = (state: any) => RouterState;
  declare export interface SyncHistoryWithStoreOptions {
    selectLocationState?: DefaultSelectLocationState;
    adjustUrlOnReplay?: boolean;
  }
  declare export interface HistoryUnsubscribe {
    unsubscribe(): void;
  }
  declare export function routerReducer(
    state?: RouterState,
    action?: Action
  ): RouterState;
  declare export function syncHistoryWithStore(
    history: History,
    store: Store<any>,
    options?: SyncHistoryWithStoreOptions
  ): History & HistoryUnsubscribe;

  declare export function routerMiddleware(history: History): Middleware;
}
