import { connect } from 'react-redux'
import ExpenseTotal from '../components/ExpenseTotal'

const mapStateToProps = (state) => {
  return {
    total: state.expenses.data.reduce((a,b) => {
      return a + parseFloat(b.amount)
    }, 0)
  }
}

const ComputedExpenseTotal = connect(mapStateToProps)(ExpenseTotal)

export default ComputedExpenseTotal