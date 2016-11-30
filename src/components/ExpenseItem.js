import { connect } from 'react-redux'
import React, { Component } from 'react'
import { showModal } from '../actions'

const ExpenseItem = ({ item, location, category, amount, currencySymbol, onClick }) => {
  return (
    <tr onClick={ onClick }>
      <td>{ item }</td>
      <td>{ category }</td>
      <td>{ currencySymbol }{ amount }</td>
    </tr>
  )
}

export default ExpenseItem
