import { createReducer } from "@reduxjs/toolkit";
import { IAuthModel } from "@store/models/auth-model";
import {
  doLoginFailure,
  doLoginRequest,
  doLoginSuccess,
  checkAuthSuccess,
  // checkAuthRequest,
  checkAuthFailure,
  doLogoutSuccess,
  doRefreshTokenSuccess,
} from "../actions/auth-action";

export const initialAuthState: IAuthModel = {
  authChecked: false,
  loggedIn: false,
  currentUser: null,
  isLoading: false,
  jwt: null,
};

const authReducer = createReducer(initialAuthState as IAuthModel, (builder) => {
  builder.addCase(doLoginRequest, (state) => {
    return { ...state, isLoading: true };
  });
  builder.addCase(doLoginSuccess, (state, action) => {
    const newState = { ...state };
    newState.loggedIn = true;
    newState.authChecked = true;
    newState.isLoading = false;
    newState.currentUser = action.payload.email;
    newState.jwt = action.payload;
    return newState;
  });
  builder.addCase(doRefreshTokenSuccess, (state, action) => {
    return { ...state, jwt: action.payload };
  });
  builder.addCase(doLoginFailure, (state) => {
    return { ...state, loggedIn: false, authChecked: false, isLoading: false, currentUser: null, jwt: null };
  });
  builder.addCase(checkAuthSuccess, (state) => {
    return { ...state, loggedIn: true, authChecked: true, isLoading: false };
  });
  builder.addCase(checkAuthFailure, (state) => {
    return { ...state, loggedIn: false, authChecked: false, isLoading: false };
  });
  builder.addCase(doLogoutSuccess, () => {
    return initialAuthState;
  });
});

export default authReducer;
