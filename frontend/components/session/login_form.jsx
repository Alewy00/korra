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
    this.demoLogin = this.demoLogin.bind(this);
  }
  hideComponent(name) {
    switch (name) {
      case "showSignup":
        this.setState({ showSignup: !this.state.showSignup });
        this.renderErrors()
        if(this.state.showSignup === false){
          // this.renderErrors();
        }
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

  demoLogin(e) {
    e.preventDefault();
    this.props.processForm({email:"demo_user@gmail.com", password: "hunter12"});  
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
       if(this.state.showSignup === true  && this.props.errors.length > 1  ){
          console.log("hit full")
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
      else if (this.props.errors.length === 1 ) {
        return(
          <div className="login-errors">
          <ul>
                <li id="error">No account found for this email. Retry, or  <button className="error-link" onClick={() => this.hideComponent("showSignup")}>
                Sign up for Korra
              </button></li> 
          </ul>
          </div>
        );
      }
  }
  
  render() {
    const {showSignup} = this.state;
    return (
      <div className="login-home">
        
      <div className="login-module">
      {showSignup && <Signup />}
  
     <div id="demo-button-container"  onClick={(e) => this.demoLogin(e)}>
        <button className="demo-button" href="">Demo Login</button>
    </div>
            <button className="signup-button" onClick={(e) => this.hideComponent("showSignup")}>
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
          <div className="footer">
            <ul id="login-footer"> 
            <li id="about">About</li>
            <li ><a id="github"href="https://github.com/Alewy00/korra">Github</a> </li>
            <li>Careers </li>
            <li>Businesses</li>
            <li>Privacy Terms </li>
            <li id="contact">Contact©</li>
            {/* <li id="quora">Quora Inc. 2020</li> */}
             </ul>
          </div>
      </div>
     </div>
    );

  }
}

export default LoginForm;


