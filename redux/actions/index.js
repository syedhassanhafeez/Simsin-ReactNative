import {makeRequest} from '../../generic/makeRequest';

export const login = data => dispatch => {
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const changeCampus = data => dispatch => {
  console.log('data === ', data);
  dispatch({
    ...data,
  });
};

export const feeSummary = data => dispatch => {
  console.log('data === ', data);
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const totalReceivables = data => dispatch => {
  console.log('data === ', data);
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const totalCollectionMonthwise = data => dispatch => {
  console.log('data === ', data);
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const genericAction = data => dispatch => {
  console.log('data === ', data);
  let response = dispatch(makeRequest({...data}));
  return response;
};
