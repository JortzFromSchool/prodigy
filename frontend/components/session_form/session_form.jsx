import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.handleForm(user);
  }

  handleDemo(e){
    e.preventDefault();
    this.setState({
      username: "Demo User",
      password: "123456"
    }, () => {let demo = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.handleForm(demo)})
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li className="session-errors" key={`error${idx}`}>
            {error}
          </li>
          ))
        }
      </ul>
    );
  }

  whichLink() {
    if(this.props.formType === "login") {
      return (
        <div className="alternate-form-link">
          <span className="alternate-form-link-text">Don't have an account?</span>
          <Link to="/signup">Sign up here.</Link>
        </div>)
    } else {
      return (
        <div className="alternate-form-link">
          <span className="alternate-form-link-text">Already have an account?</span>
          <Link to="/login">Log in Here.</Link>
        </div>)
    }
  }

  whichTitle() {
    if(this.props.formType === "login") {
      return (<span className="login-title">Sign In</span>)
    } else {
      return (<span className="login-title">Sign Up</span>)
    }
  }

  render() {
    return (
      <div className="login-form-container">
        {this.whichTitle()}
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-form-inputs">
            <br/>
            <div className="username-container">
              <span className="username-info">Prodigy Username</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </div>
            <br/>
            <div className="password-container">
              <span className="password-info">Password</span>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </div>
            <br/>
            {this.renderErrors()}
            <div className="login-form-submit-button">
              <input  type="submit" value={this.props.formType} />
              <button className='demo-button' onClick={this.handleDemo}>Demo User</button>
            </div>
          </div>
          {this.whichLink()}
          
        </form>
      </div>
    );
  }
}

export default SessionForm;