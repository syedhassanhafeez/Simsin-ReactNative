import {apiRequest} from './genericRequests/apiRequest';

const makeRequest = (requestDetails, reducerDetails) => dispatch => {
  const {requestUrl, requestMethod, requestHeaders, requestBody} =
    requestDetails;
  const {actionType} = reducerDetails;
  apiRequest(requestUrl, requestMethod, requestHeaders, requestBody).then(
    response => {
      dispatch({
        type: actionType,
        payload: response,
      }).catch(ex => {
        console.log('ex === ', ex);
      });
    },
  );
};

export {makeRequest};
