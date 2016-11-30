import React, { Component } from 'react'
import { hideModal, updateExpense, deleteExpense } from '../actions'
import { connect } from 'react-redux'

const ModalEdit = ({ expense, dispatch }) => (
  <div className="modal-box">
    <div className="modal" style={{ margin: '16px', borderRadius: '0' }}>
      <div className="modal-body">
        <div className="form">
          <div className="form-item">
            <label>Item</label>
            <input className="form-expense-item" type="text" defaultValue={ expense.item }></input>
          </div>
          <div className="form-item">
            <label>Location</label>
            <input className="form-expense-location" type="text" defaultValue={ expense.location }></input>
          </div>
          <div className="form-item">
            <label>Category</label>
            <input className="form-expense-category" type="text" defaultValue={ expense.category }></input>
          </div>
          <div className="form-item">
            <label>Amount</label>
            <input className="form-expense-amount" type="text" defaultValue={ expense.amount }></input>
          </div>
          <div className="form-item">
            <button className="button outline" onClick={() => {
              expense.item = document.querySelector('.form-expense-item').value
              expense.location = document.querySelector('.form-expense-location').value
              expense.category = document.querySelector('.form-expense-category').value
              expense.amount = document.querySelector('.form-expense-amount').value

              dispatch(updateExpense(expense)).then(() => {
                dispatch(hideModal())
              })
            }}>Save</button>
            <button className="button inverted" onClick={() => {
              dispatch(deleteExpense(expense)).then(() => {
                dispatch(hideModal())
              })
            }}>Delete</button>
            <button className="button outline" onClick={() => {
              dispatch(hideModal())
            }}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    expense: ownProps.expense
  }
}

export default connect(mapStateToProps)(ModalEdit)
