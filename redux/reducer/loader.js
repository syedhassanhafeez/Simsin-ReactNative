import {REQUESTEND, REQUESTSTART} from '../../constants';

const initialState = {
  loaderIds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUESTSTART:
      let allIDs = [...state.loaderIds];
      action?.requestPayload?.requestDetails?.extraProps?.id &
        allIDs.push(action?.requestPayload?.requestDetails?.extraProps?.id);
      return {
        ...state,
        loaderIds: allIDs,
      };
    case REQUESTEND:
      let filterRequestEndIDs = state.loaderIds.filter(
        item => item !== action?.requestPayload?.requestDetails?.extraProps?.id,
      );
      return {
        ...state,
        loaderIds: filterRequestEndIDs,
      };
    default:
      return state;
  }
}
