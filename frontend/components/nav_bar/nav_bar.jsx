import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render () {

    const { currentUser, logout, openModal } = this.props;
    const display = currentUser ? (

      <div className="login-logout-options">
        <span>Hello, { currentUser.username }</span>
        &nbsp;&nbsp;
        <button onClick={ logout }>Sign Out</button>
      </div>

    ) : (

      <div className="login-logout-options">
        <button onClick={() => openModal('login')}>Login</button>
        &nbsp;&nbsp;
        <button onClick={() => openModal('signup')}>Sign Up</button>
        &nbsp;&nbsp;
      </div>

    );

    return (
      <section className="nav-sticky">
        <header className="nav-bar">

          <div className="logo">
            <p onClick={() => console.log(this.props)}>Ars</p>
          </div>

          <div className="nav-display">
            { display }
          </div>

        </header>
      </section>
    );

  }
};

export default NavBar;