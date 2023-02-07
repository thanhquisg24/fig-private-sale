import { CombineAppActionTypes } from "./app-action";
import { CombineAuthActionTypes } from "./auth-action";

export type CombineActionTypes = CombineAuthActionTypes | CombineAppActionTypes;
export * from "./app-action";
export * from "./user-action";
export * from "./auth-action";
