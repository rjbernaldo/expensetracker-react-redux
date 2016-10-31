import { connect } from 'react-redux';
import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ModalRoot from './ModalRoot';
import { fetchData } from '../actions';

const App = ({ params, dispatch }) => {
  dispatch(fetchData(params));

  return (
    <div style={{padding: '10px'}}>
      <div className="row right">
        <div className="col">
          <h2>Today</h2>
        </div>
      </div>
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
