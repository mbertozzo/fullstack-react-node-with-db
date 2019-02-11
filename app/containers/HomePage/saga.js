/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { loadUsers } from './routines';

export function* getUsers() {
  const requestURL = `/api/v1/users`;

  try {
    const users = yield call(request, requestURL);
    yield put(loadUsers.success(users));
  } catch (err) {
    yield put(loadUsers.failure(err));
  }
}

export default function* loadData() {
  yield takeLatest(loadUsers.TRIGGER, getUsers);
}
