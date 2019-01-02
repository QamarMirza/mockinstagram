import { createRequestTypes, asyncActionCreators } from '../utils/actions';

export const FETCH_MEDIA = createRequestTypes('FETCH_MEDIA');
export const getMedia = asyncActionCreators(FETCH_MEDIA);
