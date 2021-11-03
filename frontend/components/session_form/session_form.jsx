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


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error${idx}`}>
            {error}
          </li>
          ))
        }
      </ul>
    );
  }

  whichLink() {
    if(this.props.formType === "login") {
      return (<Link to="/signup">or Sign Up</Link>)
    } else {
      return (<Link to="/login">or Log In</Link>)
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          {this.props.formType} or {this.whichLink()}
          <div className="login-form-inputs">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default SessionForm;