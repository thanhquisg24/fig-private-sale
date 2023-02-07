import { put, takeLatest } from "redux-saga/effects";

import { IUserEntity } from "@adapters/entity";

import { presenter } from "@adapters/presenters";
import { notifyMessageError } from "@emiter/AppEmitter";
import { doLoginSuccess } from "@store/actions";
import { getInfoFailure, getInfoSuccess, getInfoRequest } from "@store/actions/user-action";

function* getUserSaga(action: ReturnType<typeof doLoginSuccess>): Generator | any {
  try {
    const { userId } = action.payload;
    yield put(getInfoRequest(userId));
    const resData: IUserEntity = yield presenter.user.getUserInfo(userId);
    yield put(getInfoSuccess(resData));
  } catch (error) {
    yield put(getInfoFailure("Fetch User Info Fail!"));
    notifyMessageError("Fetch User Info Fail!");
  }
}

function* getUserSagaWatcher() {
  yield takeLatest(doLoginSuccess.type, getUserSaga);
}

export const userWatchers = [getUserSagaWatcher()];
