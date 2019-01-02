import { apiHanlder } from './apiHandler';

const endpoint = 'users/self/media/recent?access_token=';

export function getMedia(token) { return apiHanlder(token, endpoint) }
