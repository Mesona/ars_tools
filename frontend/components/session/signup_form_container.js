import React from 'react';
import { connect}  from 'react-redux';
import { createNewUser, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formType: 'Sign up',
  otherFormType: 'Sign in',
  otherModalType: 'login',
  shouldHide: false,
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  processForm: formUser => dispatch(createNewUser(formUser)),
  otherForm: (
    <button className="other-button" onClick={() => dispatch(openModal('login'))}>
      Sign in
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);