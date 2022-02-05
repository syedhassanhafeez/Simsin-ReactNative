import {makeRequest} from '../../generic/makeRequest';

export const login = data => dispatch => {
  let response = dispatch(makeRequest({...data}, {actionType: 'LOGIN'}));
  return response;
};

export const changeCampus = data => dispatch => {
  console.log('data === ', data);
  dispatch({
    ...data,
  });
};
