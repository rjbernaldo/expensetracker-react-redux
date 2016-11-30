import React, { PropTypes } from 'react'
import FormattedExpenseItem from '../containers/FormattedExpenseItem'
import ComputedExpenseTotal from '../containers/ComputedExpenseTotal'

const ExpenseList = ({ expenses, currencySymbol, onClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Location</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.data.map(expense =>
          <FormattedExpenseItem
            key={ expense.id }
            { ...expense }
          />
        )}
      </tbody>
      <tfoot>
        <ComputedExpenseTotal />
      </tfoot>
    </table>
  )
}

export default ExpenseList
