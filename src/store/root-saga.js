import { getAuthWacher } from '../home-page/sagas';
import { getMediaWacher } from '../card-grid/sagas';

import { fork, all } from 'redux-saga/effects';

export function* rootSaga(): Generator<any, any, any> {
  yield all([
    fork(getAuthWacher),
    fork(getMediaWacher),
  ]);
}
