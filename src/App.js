import React, { Component } from "react";
//import ResetPassword from "./components/resetPassword";
//import ForgotPassword from "./components/forgotPassword";
import { registerUser, loginUser, verifyUser } from "./services/api-helper";
// import logo from "./logo.svg";
import Header from "./components/header";
import { Route, withRouter } from "react-router-dom";
import ErequestsContainer from "./components/erequestsContainer";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: false,
      errorText: "",
      loggedIn: false
    };
  }


  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser, loggedIn: true });
      this.props.history.push("/erequests");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
  };


  handleLogin = async (e, loginData) => {
    e.preventDefault();
    console.log(`App.js ${loginData}`)
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    // localStorage.setItem("authToken");
    // localStorage.setItem("name");
    // localStorage.setItem("email");
    this.props.history.push("/erequests");
  };

  handleLogout = e => {
    e.preventDefault();
    this.setState({
      currentUser: false
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem("authToken")) {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      const user = { name, email };
      user &&
        this.setState({
          currentUser: user
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          cart={this.state.cart}
        />

        <Route
          path="/login"
          render={() => (
            <LoginForm
              handleLogin={this.handleLogin}
              handleReset={this.handleReset}
              errorText={this.state.errorText}
            />
          )}
        />
        <Route
          path="/register"
          render={() => (
            <RegisterForm
              handleRegister={this.handleRegister}
              errorText={this.state.errorText}
            />
          )}
        />
        {/* <Route exact path="/forgotpassword" render={() => <ForgotPassword />} />
        <Route
          exact
          path="/passwordreset/:token"
          render={props => <ResetPassword token={props.match.params.token} />}
        /> */}
        <Route path="/erequests" render={() => <ErequestsContainer />} />
        
      </div>
    );
  }
}

export default withRouter(App);