import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseTotal from './ExpenseTotal';

const ExpenseList = ({ handlers, expenses }) => {
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
        {expenses.map(expense =>
          <ExpenseItem key={ expense.id } expense={ expense } handleOpenModal={ handlers.handleOpenModal } />
        )}
      </tbody>
      <tfoot>
        <ExpenseTotal amount={expenses.reduce((a,b) => {
          return a + parseInt(b.amount);
        }, 0)} />
      </tfoot>
    </table>
  );
};

export default ExpenseList;
