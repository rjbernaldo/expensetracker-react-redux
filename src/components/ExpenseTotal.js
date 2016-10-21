import React, { Component } from 'react';

const ExpenseTotal = ({ amount }) => {
  return (
    <tr>
      <td>Total</td>
      <td></td>
      <td></td>
      <td>{ amount }</td>
    </tr>
  )
};

export default ExpenseTotal;
