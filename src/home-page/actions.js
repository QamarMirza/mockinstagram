import { createRequestTypes, asyncActionCreators } from '../utils/actions';

export const FETCH_PROFILE = createRequestTypes('FETCH_PROFILE');
export const getProfile = asyncActionCreators(FETCH_PROFILE);

export const SET_TOKEN = (token: string) => ({ type: 'SET_TOKEN', payload: token });