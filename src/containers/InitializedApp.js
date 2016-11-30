import { connect } from 'react-redux'
import { setDate, initializeApp, fetchData } from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    senderId: ownProps.params.senderId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeApp: (senderId) => {
      // dispatch(setDate(new Date))
      dispatch(initializeApp(senderId)).then(() => { dispatch(fetchData()) })
    }
  }
}

const InitializedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default InitializedApp