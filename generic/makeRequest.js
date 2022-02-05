import {REQUESTEND, REQUESTSTART} from '../constants';
import {apiRequest} from './genericRequests/apiRequest';

const makeRequest =
  ({requestDetails, reducerDetails}) =>
  dispatch => {
    const {requestUrl, requestMethod, requestHeaders, requestBody} =
      requestDetails;
    const {actionType, extraProps} = reducerDetails;
    if (extraProps?.id) {
      dispatch({
        type: REQUESTSTART,
        payload: {id: extraProps.id},
      });
    }
    apiRequest(requestUrl, requestMethod, requestHeaders, requestBody)
      .then(response => {
        console.log('response === ', response);
        if (extraProps?.id) {
          dispatch({
            type: REQUESTEND,
            payload: {id: extraProps.id},
          });
        }
        dispatch({
          type: actionType,
          payload: {
            responsePayload: response,
            requestPayload: {requestDetails, reducerDetails},
          },
        });
      })
      .catch(outerEx => {
        if (extraProps?.id) {
          dispatch({
            type: REQUESTEND,
            payload: {id: extraProps.id},
          });
        }
        console.log('outerEx === ', outerEx);
      });
  };

export {makeRequest};
