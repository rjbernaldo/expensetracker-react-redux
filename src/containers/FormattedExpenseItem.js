import { connect } from 'react-redux'
import ExpenseItem from '../components/ExpenseItem'

const mapStateToProps = (state) => {
  return {
    currencySymbol: state.user.currencySymbol || ''
  }
}

const FormattedExpenseItem = connect(mapStateToProps)(ExpenseItem)

export default FormattedExpenseItem