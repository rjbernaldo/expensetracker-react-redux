import fetch from 'isomorphic-fetch';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';
const apiUrl = 'http://server.expensetracker.rjbernaldo.com';

export function requestData() {
  return {
    type: REQUEST_DATA
  };
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data: data
  };
}

export function fetchData(params) {
  const url = `${apiUrl}/users/${params.senderId}/expenses`;

  return function(dispatch) {
    dispatch(requestData())

    return fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) throw Error(res.statusText);
        
        return res;
      })
      .then(res => res.json())
      .then(json => dispatch(receiveData(json)))
      .catch((err) => { console.log(err); });
  };
}

export function updateData(expense) {
  return {
    type: UPDATE_DATA,
    expense: expense
  };
}

export function deleteData(expense) {
  return {
    type: DELETE_DATA,
    expense: expense
  };
}

export function deleteExpense(params) {
  const url = `${apiUrl}/users/${params.senderId}/expenses/${expense.id}`;

  return function(dispatch) {
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
      if (!res.ok) throw Error(res.statusText);
      
      return res;
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(deleteData(json));
    })
    .catch((err) => { console.log(err); });
  };
  return {
    type: DELETE_DATA,
    expense: expense
  };
}

export function updateExpense(params) {
  const url = `${apiUrl}/users/${params.senderId}/expenses/${expense.id}`;

  return function(dispatch) {
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
      if (!res.ok) throw Error(res.statusText);
      
      return res;
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(updateData(json));
    })
    .catch((err) => { console.log(err); });
  };
}

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal(options) {
  return {
    type: SHOW_MODAL,
    modalType: options.modalType,
    modalProps: options.modalProps
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}
