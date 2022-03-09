import {CHANGECAMPUS, LOGIN} from '../../constants';

const initialState = {
  loggedInUserDetails: {},
  selectedCampusDetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedInUserDetails: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : {},
        selectedCampusDetails: Array.isArray(
          action?.payload?.responsePayload?.response?.user_campus,
        )
          ? action?.payload?.responsePayload?.response?.user_campus[0]
          : {},
      };
    case CHANGECAMPUS:
      let campus_id = state.loggedInUserDetails.user_campus.filter(
        item => item.campus_id === action.payload.id,
      );
      return {
        ...state,
        selectedCampusDetails: campus_id.length > 0 ? campus_id[0] : {},
      };
    default:
      return state;
  }
}
