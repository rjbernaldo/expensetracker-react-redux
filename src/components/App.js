import { connect } from 'react-redux';
import React, { Component } from 'react';
import { setDate, initializeApp, fetchData } from '../actions';
import ExpenseList from './ExpenseList';
import ModalRoot from './ModalRoot';
import DatePicker from './DatePicker';

const App = ({ params, dispatch }) => {
  dispatch(setDate());
  dispatch(initializeApp(params.senderId))
    .then(() => {
      dispatch(fetchData());
    });

  return (
    <div>
      <DatePicker />
      <div className="row">
        <div className="col">
          <ExpenseList />
        </div>
      </div>
      <ModalRoot />
    </div>
  );
};

export default connect()(App);
