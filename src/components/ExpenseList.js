import React, { PropTypes } from 'react'
import FormattedExpenseItem from '../containers/FormattedExpenseItem'
import ComputedExpenseTotal from '../containers/ComputedExpenseTotal'

const ExpenseList = ({ expenses, currencySymbol, onClick }) => {
  return (
    <div className="row">
      <div className="col">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.data.map(expense =>
              <FormattedExpenseItem
                key={ expense.id }
                { ...expense }
                onClick={ () => { onClick(expense) } }
              />
            )}
          </tbody>
          <tfoot>
            <ComputedExpenseTotal />
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default ExpenseList
