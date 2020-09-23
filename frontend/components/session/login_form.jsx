import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Signup from './signup_form_container';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showSignup: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(name) {
    switch (name) {
      case "showSignup":
        console.log("hi")
        this.setState({ showSignup: !this.state.showSignup });

        break;
      default:
        null;
    }
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
  
  renderErrors() {
        if(this.props.errors.length === 0){
            return(
              <div></div>
            )
        }
        if(this.props.errors.length > 1){
          return(
            <div className="signup-errors">
            <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} id="error">
              {error} 
              <br/><br/>
            </li>
          ))}   
        </ul>
        </div>
          )
      }

    return(
      <div className="login-errors">
      <ul>
         {/* {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error} 
            <br/><br/>
          </li>
        ))}  */}
             <li id="error">No account found for this email. Retry, or <Link to="/signup">Sign up for Korra</Link> </li> 
      </ul>
      </div>
    );
  }
  
  render() {
    const {showSignup} = this.state;
    return (
      <div className="login-home">
        
      <div className="login-module">
      {showSignup && <Signup />}
            <button className="signup-button" onClick={() => this.hideComponent("showSignup")}>
            Sign up with email
          </button>
        <h1 id="Korra"> Korra</h1>
        <h2 id="motto">A place to share knowledge and better understand the world</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
           {this.renderErrors()}
           <h5 id="login-att">Login</h5>
          <br/>
          <div className="login-attributes">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
                />
            <br/>
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
                />
            <br/>
            <input className="login-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
     </div>
    );

  }
}

export default LoginForm;


