import { connect } from 'react-redux'
import React, { Component } from 'react'
import CurrentExpenseList from '../containers/CurrentExpenseList'
import ModalRoot from './ModalRoot'
import DatePicker from './DatePicker'

const App = ({ initializeApp, senderId }) => {
  initializeApp(senderId)
  
  return (
    <div>
      <DatePicker />
      <div className="row">
        <div className="col">
          <CurrentExpenseList />
        </div>
      </div>
      <ModalRoot />
    </div>
  )
}

export default App
