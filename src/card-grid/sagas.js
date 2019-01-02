import type { Saga } from 'redux-saga';
import { push } from 'react-router-redux';

import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { getMedia as getMediaApi } from '../api/media';
import { FETCH_MEDIA, getMedia } from './actions';

export function* getMediaWacher(): Saga<void> {
  yield all([
    takeLatest(FETCH_MEDIA.REQUEST, checkAuth)
  ]);
};


export function* checkAuth(): Saga<void> {
  const token = yield select((state) => state.user.token);
  console.log('getmedia')

  try {
    const response: { data: any } = yield call(getMediaApi, token);
    yield put(getMedia.success(response.data)); console.log('media')
  } catch (error) {
    yield put(getMedia.failure(error));
  }

}