import { apiHanlder } from './apiHandler';

const endpoint = 'users/self/?access_token=';

export function getSelf(token) { return apiHanlder(token, endpoint) }