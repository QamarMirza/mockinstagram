import axios from 'axios';


const baseurl = 'https://api.instagram.com/v1/';

export function apiHanlder(token, endpoint) {
  const url = baseurl + endpoint + token;
  const axiosConfig = {
    url,
    method: 'GET',
  };
  return axios
    .request(axiosConfig)
    .then((res: Object) => {
      return res.status === 204 ? {} : res.data;
    })
    .catch(error => {
      console.log(error);
    });
};