import {REQUESTEND, REQUESTSTART} from '../../constants';

const initialState = {
  loaderIds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUESTSTART:
      let allIDs = [...state.loaderIds];
      action?.payload?.id & allIDs.push(action?.payload?.id);
      return {
        ...state,
        loaderIds: allIDs,
      };
    case REQUESTEND:
      let filterRequestEndIDs = state.loaderIds.filter(
        item => item !== action?.payload?.id,
      );
      return {
        ...state,
        loaderIds: filterRequestEndIDs,
      };
    default:
      return state;
  }
}
