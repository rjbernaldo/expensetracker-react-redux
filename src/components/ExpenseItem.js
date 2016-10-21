import React, { Component } from 'react';
import { showModal } from '../actions';

const ExpenseItem = ({ expense, handleOpenModal }) => {
  let handleClick = () => {
    handleOpenModal({
      modalType: 'EDIT_EXPENSE',
      modalProps: {
        handleOpenModal,
        expense
      }
    });
  }

  return (
    <tr onClick={ handleClick }>
      <td>{ expense.item }</td>
      <td>{ expense.location }</td>
      <td>{ expense.category }</td>
      <td>{ expense.amount }</td>
    </tr>
  );
}

export default ExpenseItem;
