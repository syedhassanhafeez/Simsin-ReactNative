import {LOGIN, REQUESTEND, REQUESTSTART} from '../constants';
import {apiRequest} from './genericRequests/apiRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    let constructHeaders = {...requestHeaders};
    if (actionType !== LOGIN) {
      constructHeaders['Authorization'] = AsyncStorage.getItem('token');
    }
    apiRequest(requestUrl, requestMethod, constructHeaders, requestBody)
      .then(response => {
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
