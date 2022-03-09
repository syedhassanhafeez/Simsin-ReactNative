import {
  GETADMISSIONLEFT,
  GETLATESTAFFSUMMARY,
  GETLWPLASTTWOMONTHS,
  GETSALARYLASTTWOMONTHS,
  GETTODAYSABSENTSUMMARY,
} from '../../constants';

const initialState = {
  enquires: {},
  admission: {},
  student_left: {},
  admission_fee: {},
  bed_debt: {},
  todays_absent_summary: [],
  late_staff_summary: [],
  lwp_last_two_months: [],
  get_salary_last_two_months: [],
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
    case GETTODAYSABSENTSUMMARY:
      return {
        ...state,
        todays_absent_summary: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : [],
      };
    case GETLATESTAFFSUMMARY:
      return {
        ...state,
        late_staff_summary: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : [],
      };

    case GETLWPLASTTWOMONTHS:
      return {
        ...state,
        lwp_last_two_months: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : [],
      };

    case GETSALARYLASTTWOMONTHS:
      return {
        ...state,
        get_salary_last_two_months: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : [],
      };
    default:
      return state;
  }
}
