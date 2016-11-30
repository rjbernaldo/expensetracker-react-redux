import fetch from 'isomorphic-fetch'

const API_URL = process.env.API_URL

export const SET_DATE = 'SET_DATE'

export function setDate(date) {
  return {
    type: SET_DATE,
    date: date
  }
}

export const INITIALIZE = 'INITIALIZE_APP'

export function initializeApp(senderId) {
  return function(dispatch) {
    let url = `${API_URL}/users/${senderId}`
    return fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText)

        return res
      })
      .then(res => res.json())
      .then(json => dispatch(setUser(json)))
      .catch((err) => { console.log(err) })
  }
}

export const SET_USER = 'SET_USER'

export function setUser(user) {
  return {
    type: SET_USER,
    user: user
  }
}

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'
export const DELETE_DATA = 'DELETE_DATA'

export function requestData() {
  return {
    type: REQUEST_DATA
  }
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data: data
  }
}

export function fetchData(dateFrom, dateTo) {
  return function(dispatch, getState) {
    let user = getState().user
    let date = getState().date
    
    dateFrom = dateFrom || `${date.m + 1}/${date.d}/${date.y}`
    dateTo = dateTo || `${date.m + 1}/${date.d}/${date.y}`
    
    let url = `${API_URL}/users/${user.sender_id}/search?from=${dateFrom}&to=${dateTo}`
    
    dispatch(requestData())

    return fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText)
        
        return res
      })
      .then(res => res.json())
      .then(json => dispatch(receiveData(json)))
      .catch((err) => { console.log(err) })
  }
}

export function updateData(expense) {
  return {
    type: UPDATE_DATA,
    expense: expense
  }
}

export function deleteData(expense) {
  return {
    type: DELETE_DATA,
    expense: expense
  }
}

export function deleteExpense(expense) {
  return function(dispatch, getState) {
    let user = getState().user
    let url = `${API_URL}/users/${user.sender_id}/expenses/${expense.id}`

    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        expense: expense
      })
    })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      
      return res
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(deleteData(json))
    })
    .catch((err) => { console.log(err) })
  }
  return {
    type: DELETE_DATA,
    expense: expense
  }
}

export function updateExpense(expense) {
  return function(dispatch, getState) {
    let user = getState().user
    let url = `${API_URL}/users/${user.sender_id}/expenses/${expense.id}`

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        expense: expense
      })
    })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      
      return res
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(updateData(json))
    })
    .catch((err) => { console.log(err) })
  }
}

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export function showModal(options) {
  return {
    type: SHOW_MODAL,
    modalType: options.modalType,
    modalProps: options.modalProps
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}
