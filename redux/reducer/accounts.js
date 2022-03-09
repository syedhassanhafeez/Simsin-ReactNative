import {
  FEESUMMARY,
  GETRECEIVABLECOLLECTION,
  GETTOP5DEFAULTERS,
  GETTOP5DEFAULTERSSUMMARY,
  TOTALCOLLECTIONMONTHWISE,
  TOTALRECEIVABLES,
} from '../../constants';

const initialState = {
  todays_collection: 0,
  monthly_fee: 0,
  monthly_collection: 0,
  receivable: 0,
  totalReceivables: {},
  totalCollectionMonthwise: {},
  top_five_defaulters_count: 0,
  top_five_defaulters_summary: [],
  receivable_collection: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FEESUMMARY:
      return {
        ...state,
        todays_collection: action?.payload?.responsePayload?.response
          ?.todays_collection
          ? action?.payload?.responsePayload?.response?.todays_collection
          : 0,
        monthly_fee: action?.payload?.responsePayload?.response?.monthly_fee
          ? action?.payload?.responsePayload?.response?.monthly_fee
          : 0,
        monthly_collection: action?.payload?.responsePayload?.response
          ?.monthly_collection
          ? action?.payload?.responsePayload?.response?.monthly_collection
          : 0,
        receivable: action?.payload?.responsePayload?.response?.receivable
          ? action?.payload?.responsePayload?.response?.receivable
          : 0,
      };
    case TOTALRECEIVABLES:
      return {
        ...state,
        totalReceivables: action?.payload?.responsePayload?.response
          ? {...action?.payload?.responsePayload?.response}
          : {},
      };
    case TOTALCOLLECTIONMONTHWISE:
      return {
        ...state,
        totalCollectionMonthwise: action?.payload?.responsePayload?.response
          ? {...action?.payload?.responsePayload?.response}
          : {},
      };
    case GETTOP5DEFAULTERS:
      return {
        ...state,
        top_five_defaulters_count:
          action?.payload?.responsePayload?.response?.top_five_defaulters_count,
      };
    case GETTOP5DEFAULTERSSUMMARY:
      console.log(
        `GETTOP5DEFAULTERSSUMMARY action?.payload?.responsePayload?.response === ${action?.payload?.responsePayload?.response}`,
      );
      return {
        ...state,
        top_five_defaulters_summary: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : [],
      };
    case GETRECEIVABLECOLLECTION:
      return {
        ...state,
        receivable_collection: action?.payload?.responsePayload?.response
          ? action?.payload?.responsePayload?.response
          : {},
      };
    default:
      return state;
  }
}
