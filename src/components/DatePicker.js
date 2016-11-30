import { connect } from 'react-redux'
import React, { Component } from 'react'
import { nextDate, prevDate } from '../actions'

const DatePicker = ({ dispatch, date }) => {
  let now = new Date()
  let m = now.getMonth()
  let d = now.getDate()
  let y = now.getFullYear()
  let isToday = m === date.month && d === date.date && y === date.year
  
  let currentDate = isToday ? 'Today' : `${date.month}/${date.date}/${date.year}`
  
  return (
    <div className="form" style={{ padding: '10px' }}>
      <div className="form-item">
        <button className="button inverted" onClick={ () => { dispatch(prevDate())} }>{ '<' }</button>
        <button className="button inverted">{ currentDate }</button>
        <button className="button inverted" onClick={ () => { dispatch(nextDate())} }>{ '>' }</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(DatePicker)