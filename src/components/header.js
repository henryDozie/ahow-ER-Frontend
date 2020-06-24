import React, { Component } from "react";
//import Form from "./searchform";
import { indexErequests } from "../services/api-helper";
import { Link, withRouter } from "react-router-dom";
import logo from "../images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: false,
      errorText: "",
      loggedIn: false,

    };
  }

  increCount = async (e) => {
    e.preventDefault()
    const resp = await indexErequests()
    const count = resp.length
    this.setState({ count })
  }

  profileSubmit = async e => {
    e.preventDefault();
    const resp = await indexErequests();
    console.log(resp);

    const smthing = resp.filter(resp => resp.created_by === 1);

    console.log(smthing);
  };

  render() {
    return (
      <div>
        <header>
          <Link to="/home">
            <div className="logo"> <img src={logo} alt="loading.." className="logoImg"/></div>
          </Link>
          <div className="headRegion">
            <div className="brandName">
              {/* <img src={logo} alt="loading"/> */}
            </div>
            <div className="loginAndSignUp">
              <div className="login">
                {this.props.currentUser ? (
                  <div className="logout">
                    <button onClick={e => this.props.handleLogout(e)}>
                      <h2>Logout</h2>
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button>
                      Login
                    </button>
                  </Link>
                )}
              </div>
              <div className="signup">
                <Link to="/register">
                  <button>
                    Signup
                  </button>
                </Link>
              </div>
            </div>
            {/* )} */}
            {/* <div className="cartAndBar">
              <Form handleLogin={this.handleLogin} />
              {this.props.currentUser && (
                <div className="profileButton">
                  <button onClick={e => this.profileSubmit(e)} className="profileButton">
                    <h2>Profile</h2>
                  </button>
                </div>
              )}
              
            </div> */}
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);