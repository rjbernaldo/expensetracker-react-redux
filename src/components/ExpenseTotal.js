import React, { Component } from 'react'

const ExpenseTotal = ({ total }) => {
  return (
    <tr>
      <td>Total</td>
      <td></td>
      <td></td>
      <td>{ total }</td>
    </tr>
  )
}

export default ExpenseTotal
