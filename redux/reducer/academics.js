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
        enquires: action?.payload?.responsePayload?.response?.enquires,
        admission: action?.payload?.responsePayload?.response?.admission,
        student_left: action?.payload?.responsePayload?.response?.student_left,
        admission_fee:
          action?.payload?.responsePayload?.response?.admission_fee,
        bed_debt: action?.payload?.responsePayload?.response?.bed_debt,
      };
    default:
      return state;
  }
}
