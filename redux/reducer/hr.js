import {GETEMPLOYEESSUMMARY} from '../../constants';

const initialState = {
  total_staff: 0,
  todays_absent: 0,
  todays_late: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETEMPLOYEESSUMMARY:
      return {
        ...state,
        total_staff: action?.payload?.responsePayload?.response?.total_staff,
        todays_absent:
          action?.payload?.responsePayload?.response?.todays_absent,
        todays_late: action?.payload?.responsePayload?.response?.todays_late,
      };
    default:
      return state;
  }
}
