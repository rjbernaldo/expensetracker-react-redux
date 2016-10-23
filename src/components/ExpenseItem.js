import { connect } from 'react-redux';
import React, { Component } from 'react';
import { showModal } from '../actions';

const ExpenseItem = ({ expense, dispatch }) => {
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
      <td>{ expense.amount }</td>
    </tr>
  );
}

export default connect()(ExpenseItem);
