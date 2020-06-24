import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

 class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // Same as const name = e.target.name // const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="loginPage">
        {this.props.errorText && <p>{this.props.errorText}</p>}
        <form
          onSubmit={(e) => this.props.handleRegister(e, this.state)}
          className="registerForm loginForm"
        >
          <h1>Register!</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoFocus
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Valid Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    )
  }
 }

export default withRouter(RegisterForm);