import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalEdit from './ModalEdit'

const MODAL_COMPONENTS = {
  'EDIT_EXPENSE': ModalEdit
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span />
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal { ...modalProps } />
}

const mapStateToProps = (state) => {
  return state.modal
}

export default connect(mapStateToProps)(ModalRoot)
