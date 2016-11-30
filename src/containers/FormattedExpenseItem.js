import { connect } from 'react-redux'
import ExpenseItem from '../components/ExpenseItem'

const mapStateToProps = (state) => {
  return {
    currencySymbol: state.user.currencySymbol || ''
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

const FormattedExpenseItem = connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)

export default FormattedExpenseItem