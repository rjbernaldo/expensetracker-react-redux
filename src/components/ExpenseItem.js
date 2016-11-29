import { connect } from 'react-redux';
import React, { Component } from 'react';
import { showModal } from '../actions';

const ExpenseItem = ({ expense, currencySymbol, dispatch }) => {
  return (
    <tr onClick={ () => dispatch(showModal({
      modalType: 'EDIT_EXPENSE',
      modalProps: {
        expense: expense
      }
    })) }>
      <td>{ expense.item }</td>
      <td>{ expense.location }</td>
      <td>{ expense.category }</td>
      <td>{ currencySymbol ? currencySymbol : '' }{ expense.amount }</td>
    </tr>
  );
}

export default connect()(ExpenseItem);
