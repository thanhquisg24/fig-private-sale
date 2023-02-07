import { all } from "redux-saga/effects";
import { authWatchers } from "./auth-saga";

export function* rootSaga(): Generator {
  yield all([...authWatchers]);
}
