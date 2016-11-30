import React, { Component } from 'react'

const DatePicker = ({ date, m, d, y, isToday, nextDate, prevDate }) => {
  return (
    <div className="form" style={{ padding: '10px' }}>
      <div className="form-item">
        <button className="button inverted" onClick={ () => { prevDate(date) } }>{ '<' }</button>
        <button className="button inverted">{ `${m} ${d}, ${y}` }</button>
        <button className="button inverted" onClick={ () => { nextDate(date) } } disabled={ isToday }>{ '>' }</button>
      </div>
    </div>
  )
}

export default DatePicker