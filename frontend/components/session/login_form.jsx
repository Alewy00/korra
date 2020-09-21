import React from 'react';
import {Link} from 'react-router-dom';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="login-module">
        <h1>Korra</h1>
        <h2>A place to share knowledge and better understand the world</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          login:
          {/* Please {this.props.formType} or {this.props.navLink} */}
          <div className="login-attributes">
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="login-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        <div className="signupLink">
        <Link to="/signup">Sign up with email</Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;


