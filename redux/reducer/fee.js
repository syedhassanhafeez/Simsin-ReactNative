import {GETEMPLOYEESSUMMARY, GETTFCOMPARISON} from '../../constants';

const initialState = {
  this_month_collection: 0,
  last_month_collection: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETTFCOMPARISON:
      return {
        ...state,
        this_month_collection: action?.payload?.responsePayload?.response
          ?.this_month_collection
          ? action?.payload?.responsePayload?.response?.this_month_collection
          : 0,
        last_month_collection: action?.payload?.responsePayload?.response
          ?.last_month_collection
          ? action?.payload?.responsePayload?.response?.last_month_collection
          : 0,
      };
    default:
      return state;
  }
}
