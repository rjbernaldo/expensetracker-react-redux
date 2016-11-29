import { connect } from 'react-redux';
import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseTotal from './ExpenseTotal';

const ExpenseList = ({ expenses, currencySymbol, onClick }) => {
  let totalAmount = expenses.data.reduce((a,b) => {
    return a + parseInt(b.amount);
  }, 0);

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
          <ExpenseItem
            key={ expense.id }
            expense={ expense }
            currencySymbol={ currencySymbol }
            onClick={ onClick }
          />
        )}
      </tbody>
      <tfoot>
        <ExpenseTotal amount={ totalAmount } />
      </tfoot>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    currencySymbol: state.user.currencySymbol
  };
}

export default connect(mapStateToProps)(ExpenseList);
