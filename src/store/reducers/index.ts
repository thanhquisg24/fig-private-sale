import { combineReducers } from "@reduxjs/toolkit";
import authReducer, { initialAuthState } from "./auth-reducer";

import spinnerReducer, { initialSpinnerState } from "./spinner-reducer";

const rootReducer = combineReducers({
  spinner: spinnerReducer,
  auth: authReducer,
});

export default rootReducer;
export const initialState: ReturnType<typeof rootReducer> = {
  spinner: initialSpinnerState,
  auth: initialAuthState,
};
