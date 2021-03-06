import { connect } from 'react-redux'
import { setDate, fetchData } from '../actions'
import _ from 'underscore'
import DatePicker from '../components/DatePicker'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const mapStateToProps = (state) => {
  return {
    date: state.date.date,
    m: monthNames[state.date.m],
    d: state.date.d,
    y: state.date.y,
    isToday: state.date.d === (new Date).getDate() && state.date.m === (new Date()).getMonth()
  }
}

const mapDispatchToProps = (dispatch) => {
  let throttledFetchData = _.throttle(() => { dispatch(fetchData()) }, 1000)
  return {
    nextDate: (date) => {
      let tomorrow = date
      tomorrow.setDate(tomorrow.getDate() + 1)
      
      dispatch(setDate(tomorrow))
      throttledFetchData()
    },
    prevDate: (date) => {
      let yesterday = date
      yesterday.setDate(yesterday.getDate() - 1)
      
      dispatch(setDate(yesterday))
      throttledFetchData()
    }
  }
}

const ExtendedDatePicker = connect(mapStateToProps, mapDispatchToProps)(DatePicker)

export default ExtendedDatePicker