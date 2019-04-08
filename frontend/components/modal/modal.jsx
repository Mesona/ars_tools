import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux'

import SignupFormContainer from '../session/signup_form_container';
import SigninFormContainer from '../session/signin_form_container';

function Modal({modal, closeModal}) {
  // const demoUser={username: 'Demo', email: 'demo@email.com', password: 'password'};
  const nullUser={username: '', email: '', password: ''};
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <SigninFormContainer user={nullUser} />;
      break;
    // case 'demo':
    //   component = <SigninFormContainer user={demoUser} />
    //   break;
    case 'signup':
      component = <SignupFormContainer user={nullUser} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child"  onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);