import { SET_DATE, PREV_DATE, NEXT_DATE } from '../actions';

const initialState = {
  month: undefined,
  date: undefined,
  year: undefined
};

export default function date(state = initialState, action) {
  switch(action.type) {
    case SET_DATE:
      return Object.assign({}, state, action.date);
    // case PREV_DATE:
    //   return Object.assign({}, state, {
    //     month: action.date.month,
    //     date: action.date.date,
    //     year: action.date.year
    //   });
    // case NEXT_DATE:
    //   return Object.assign({}, state, {
    //     month: action.date.month,
    //     date: action.date.date,
    //     year: action.date.year
    //   });
    default:
      return state;
  }
}
