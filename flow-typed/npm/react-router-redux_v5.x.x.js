/**
 * Flowtype definitions for react-router-redux_v5.x.x
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

import {
  History,
  Location,
  Path,
  LocationState,
  LocationDescriptor
} from "history";

import { Component } from "react";

declare module "react-router-redux" {
  declare export type RouterAction = {
    type: typeof CALL_HISTORY_METHOD,
    payload: LocationActionPayload
  } & Action;

  declare export interface ConnectedRouterProps<State> {
    store?: Store<State>;
    history?: History;
  }
  declare export class ConnectedRouter<ConnectedRouterProps> extends Component {}
  declare export var LOCATION_CHANGE: string;
  declare export interface RouterState {
    location: Location | null;
  }
  declare export function routerReducer(
    state?: RouterState,
    action?: RouterAction
  ): RouterState;
  declare export var CALL_HISTORY_METHOD: string;
  declare export function push(
    location: LocationDescriptor,
    state?: LocationState
  ): RouterAction;
  declare export function replace(
    location: LocationDescriptor,
    state?: LocationState
  ): RouterAction;
  declare export function go(n: number): RouterAction;
  declare export function goBack(): RouterAction;
  declare export function goForward(): RouterAction;
  declare export var routerActions: {
    push: typeof push,
    replace: typeof replace,
    go: typeof go,
    goBack: typeof goBack,
    goForward: typeof goForward
  };
  declare export interface LocationActionPayload {
    method: string;
    args?: any[];
  }
  declare export type LocationChangeAction = {
    type: typeof LOCATION_CHANGE,
    payload: Location & {
      props?: {
        match: {
          path: string,
          url: string,
          params: any,
          isExact: boolean
        },
        location: Location,
        history: History
      }
    }
  } & Action;
  declare export function routerMiddleware(history: History): Middleware;
}
