import React, { Component } from 'react'
import ExtendedDatePicker from '../containers/ExtendedDatePicker'
import CurrentExpenseList from '../containers/CurrentExpenseList'
import ModalRoot from './ModalRoot'

const App = ({ initializeApp, senderId }) => {
  initializeApp(senderId)
  
  return (
    <div>
      <ExtendedDatePicker />
      <CurrentExpenseList />
      <ModalRoot />
    </div>
  )
}

export default App
