import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="loginPage">
        <form
          onSubmit={e => this.props.handleLogin(e, this.state)}
          className="loginForm"
        >
          <h1>Login!</h1>
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            autoFocus
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
          {/* <Link to="/register">Register</Link> */}
          <Link to="/forgotpassword">
            <button>Forgot Password</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);