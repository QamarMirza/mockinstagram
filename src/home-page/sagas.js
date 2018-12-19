import type { Saga } from 'redux-saga';
import { push } from 'react-router-redux';

import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { getSelf } from '../api/auth';
import { FETCH_PROFILE, getProfile } from '../home-page/actions';

export function* getAuthWacher(): Saga<void> {
  yield all([
    takeLatest(FETCH_PROFILE.REQUEST, checkAuth)
  ]);
};


export function* checkAuth(): Saga<void> {
  const token = yield select((state) => state.user.token);
  const auth = { type: 'AUTHENTICATED' };
  try {
    const response: { data: any } = yield call(getSelf, token);
    yield put(auth);

    yield* put(getProfile.success(response.data)); console.log('fghjkl')
    yield put(push('/app'));
  } catch (error) {
    yield put(getProfile.failure(error));
    console.log('ghjk')

  }

}