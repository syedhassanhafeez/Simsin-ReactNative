import {makeRequest} from '../../generic/makeRequest';

export const login = data => dispatch => {
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const changeCampus = data => dispatch => {
  dispatch({
    ...data,
  });
};

export const feeSummary = data => dispatch => {
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const totalReceivables = data => dispatch => {
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const totalCollectionMonthwise = data => dispatch => {
  let response = dispatch(makeRequest({...data}));
  return response;
};

export const genericAction = data => dispatch => {
  let response = dispatch(makeRequest({...data}));
  return response;
};
