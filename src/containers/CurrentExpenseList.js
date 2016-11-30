import { connect } from 'react-redux'
import { showModal } from '../actions'
import ExpenseList from '../components/ExpenseList'

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (expense) => {
      dispatch(showModal({
        modalType: 'EDIT_EXPENSE',
        modalProps: {
          expense: expense
        }
      }))
    }
  }
}

const CurrentExpenseList = connect(mapStateToProps, mapDispatchToProps)(ExpenseList)

export default CurrentExpenseList