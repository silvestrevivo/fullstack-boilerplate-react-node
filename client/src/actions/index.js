import axios from 'axios';
import { FETCH_DATA } from './types';

export function fetchData() {
  const request = axios.get('https://jsonplaceholder.typicode.com/posts');

  return function(dispatch) {
    return request
      .then(response =>
        dispatch({
          type: FETCH_DATA,
          payload: response.data,
        })
      )
      .catch(error => console.log(error));
  };
}
