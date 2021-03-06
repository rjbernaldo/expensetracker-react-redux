import { UPDATE_DATA } from '../actions'

export default function expense(state, action) {
  switch(action.type) {
    case UPDATE_DATA:
      if (state.id !== action.expense.id) {
        return state
      }

      return Object.assign({}, state, action.expense)
  }
}
