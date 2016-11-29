import { SET_USER } from '../actions';

const initialState = {};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}
