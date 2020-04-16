import axios from 'axios';

export function getCall(urls, params = {}) {
  const url = urls;
  return axios
    .get(url, params)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}