import React from 'react';
import { connect}  from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formType: 'Sign in',
  otherFormType: 'Sign Up',
  otherModalType: 'signup',
  shouldHide: true,
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  processForm: formUser => dispatch(login(formUser)),
  otherForm: (
    <button className="other-button" onClick={() => dispatch(openModal('signup'))}>
      Create account
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);