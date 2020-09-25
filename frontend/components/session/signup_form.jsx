import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      first_name: ''
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
  renderSignupErrors(){
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
    

  render() {
    return (
      <div className="signup-model">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
   
         <h6 id="signup-att">Sign up</h6> 
          <div className="signup-attributes">
            <h3 id="first-name">FIRST NAME </h3>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-firstName"
              />
            <br/>
              <h4 id="last-name">LAST NAME</h4>
              <br/>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-lastName"
              />
           
            <br/>
            <label className="signup-email-label">EMAIL
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-email"
              />
            </label>
            <br/>
            <label className = "signup-password-label">PASSWORD
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-password"
              />
            </label>
            <br/>
            <input className="signup-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;