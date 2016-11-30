import { SET_DATE } from '../actions'

const initialDate = new Date()

const initialState = {
  date: initialDate,
  m: initialDate.getMonth(),
  d: initialDate.getDate(),
  y: initialDate.getFullYear()
}

export default function date(state = initialState, action) {
  switch(action.type) {
    case SET_DATE:
      return Object.assign({}, state, {
        date: action.date,
        m: action.date.getMonth(),
        d: action.date.getDate(),
        y: action.date.getFullYear()
      })
    default:
      return state
  }
}
