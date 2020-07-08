import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      password: this.props.user.password,
      active: false,
      renderedErrors: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.state.renderedErrors = true;

    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    console.log(user)

    this.props.processForm(user)
      .then(this.props.closeModal);

    if (this.props.errors.session !== []) {
      setTimeout(() => this.state.renderedErrors = false, 500);
    }
  }

  renderErrors() {

    return(
      <ul>
        <li>
          <span className={this.state.renderedErrors ? 'fading' : ''}>{this.props.errors[0]}</span>
        </li>
      </ul>
    );
  }


  // TODO: Fix the moving text for the login and signup modal, it currently only
  // moves the first field modified
  // FIXME: New account signup errors no longer appear
  // FIXME: Tests to prevent regression
  render () {
    return (
      <div className="session-form" onClick={()=>{this.setState({active: false})}}>
        <div onClick={this.props.closeModal} className="close-x">X</div><br></br><br></br>
        <div className="modal-title">{this.props.formType}</div><br></br>

        <form className="login-form-box"  onSubmit={this.handleSubmit}>

          <label className={this.props.shouldHide ? 'hidden' : ''} onClick={e => e.stopPropagation()} >
            <section className="descriptor-div">
              <span className={this.state.active === 'username' ? 'placeholderText' : this.state.username === '' ? '' : 'hidden'}>Username</span>
            </section>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              onClick={()=>{this.setState({active: 'username'})}}
            />
          </label>

          <label onClick={e => e.stopPropagation()}>
            <section className="descriptor-div">
              <span className={this.state.active === 'email' ? 'placeholderText' : this.state.email === '' ? '' : 'hidden'}>Email</span>
            </section>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              onClick={()=>{this.setState({active: 'email'})}}
            />
          </label>

          <label onClick={e => e.stopPropagation()}>
            <section className="descriptor-div">
              <span  className={this.state.active === 'password' ? 'placeholderText' : this.state.password === '' ? '' : 'hidden'}>Password</span>
            </section>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              onClick={()=>{this.setState({active: 'password'})}}
            />
          </label>

          <div className="session-errors"><br></br>{this.renderErrors()}</div>

          <nav className="session-form-buttons">
            <input type="submit" className="form-button" value={this.props.formType}></input>
            <div className="other-form-button">
              {this.props.otherForm}
            </div>
          </nav>

        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);