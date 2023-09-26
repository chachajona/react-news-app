import { saveUserInfo } from "../utils/Common";
import { fork, all, call, put, takeLatest, select } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../config/actionTypes";
import { createAlert } from "../store/alertSlice";
import { loginSuccess, loginFail } from "../action/loginAction";
import data from "../api/data.json";
import { push } from "connected-react-router";

const loginApi = async (user) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data[user]) {
        resolve(data[user].role);
      } else {
        reject("Invalid user");
      }
    }, 100); // Simulate an asynchronous API call
  });
};

function* loginSaga(data) {
  const username = data.payload;
  try {
    const role = yield call(loginApi,username);
    // set a stringified version of our user to local storage on our domain
    saveUserInfo({ username, role });
    //inform redux that our login is successful
    yield put(loginSuccess(username));
    yield put(createAlert({ text: "Logged in successfully", type: "success" }));
  } catch (error) {
    //inform redux that our login is failed
    yield put(loginFail(error));
    yield put(createAlert({ text: error, type: "error" }));
  }
  
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
  ])
}