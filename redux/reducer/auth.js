import {LOGIN} from '../../constants';

const initialState = {
  loggedInUserDetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedInUserDetails: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : {},
      };
    default:
      return state;
  }
}
