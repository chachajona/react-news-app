import { fork, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getNews, getLatestNews } from "../store/newsSlice";
import { createAlert } from "../store/alertSlice";
import axios from "axios";

function* fetchNews() {
  const response = yield axios.get("newsData.json");
  yield put(getNews(response.data));
  yield put(
    createAlert({ text: "News fetched successfully", type: "success" })
  );
}

function* fetchLatestNews() {
  const response = yield axios.get("latestNewsData.json");
  yield put(getLatestNews(response.data));
  yield put(
    createAlert({ text: "Latest News fetched successfully", type: "success" })
  );
}

function* watchNews() {
  yield takeLatest("news/getNews", fetchNews);
  yield takeLatest("news/getLatestNews", fetchLatestNews);
}
export default function* newsSaga() {
  yield all([fork(watchNews)]);
}
