import {GETADMISSIONLEFT} from '../../constants';

const initialState = {
  enquires: {},
  admission: {},
  student_left: {},
  admission_fee: {},
  bed_debt: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETADMISSIONLEFT:
      return {
        ...state,
        enquires: action?.payload?.responsePayload?.responsePayload?.enquires,
        admission: action?.payload?.responsePayload?.responsePayload?.admission,
        student_left:
          action?.payload?.responsePayload?.responsePayload?.student_left,
        admission_fee:
          action?.payload?.responsePayload?.responsePayload?.admission_fee,
        bed_debt: action?.payload?.responsePayload?.responsePayload?.bed_debt,
      };
    default:
      return state;
  }
}
