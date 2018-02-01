/**
 * Flowtype definitions for history_v4.x.x
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module "history" {
  declare export type Action = "PUSH" | "POP" | "REPLACE";
  declare export type UnregisterCallback = () => void;
  declare export interface History {
    length: number;
    action: Action;
    location: Location;
    push(path: History$Path, state?: History$LocationState): void;
    push(location: LocationDescriptorObject): void;
    replace(path: History$Path, state?: History$LocationState): void;
    replace(location: LocationDescriptorObject): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    block(prompt?: boolean): UnregisterCallback;
    listen(listener: History$LocationListener): UnregisterCallback;
    createHref(location: LocationDescriptorObject): History$Href;
  }
  declare export interface Location {
    pathname: History$Pathname;
    search: History$Search;
    state: History$LocationState;
    hash: History$Hash;
    key: History$LocationKey;
  }
  declare export interface LocationDescriptorObject {
    pathname?: History$Pathname;
    search?: History$Search;
    state?: History$LocationState;
    hash?: History$Hash;
    key?: History$LocationKey;
  }
  declare export type History$LocationDescriptor =
    | History$Path
    | LocationDescriptorObject;

  declare export type History$LocationKey = string;

  declare export type History$LocationListener = (
    location: Location,
    action: Action
  ) => void;

  declare export type History$LocationState = any;

  declare export type History$Path = string;

  declare export type History$Pathname = string;

  declare export type History$Search = string;

  declare export type History$TransitionHook = (
    location: Location,
    callback: (result: any) => void
  ) => any;

  declare export type History$Hash = string;

  declare export type History$Href = string;
  declare export type LocationDescriptor =
    | History$Path
    | LocationDescriptorObject;
  declare export type LocationKey = string;
  declare export type LocationListener = (
    location: Location,
    action: Action
  ) => void;
  declare export type LocationState = any;
  declare export type Path = string;
  declare export type Pathname = string;
  declare export type Search = string;
  declare export type TransitionHook = (
    location: Location,
    callback: (result: any) => void
  ) => any;
  declare export type Hash = string;
  declare export type Href = string;
  declare export interface Module {
    // createBrowserHistory: typeof createBrowserHistory;
    // createHashHistory: typeof createHashHistory;
    // createMemoryHistory: typeof createMemoryHistory;
    // createLocation: typeof createLocation;
    // locationsAreEqual: typeof locationsAreEqual;
    // parsePath: typeof parsePath;
    // createPath: typeof createPath;
  }
}
