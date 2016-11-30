import { connect } from 'react-redux'
import ExpenseList from '../components/ExpenseList'

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const CurrentExpenseList = connect(mapStateToProps)(ExpenseList)

export default CurrentExpenseList