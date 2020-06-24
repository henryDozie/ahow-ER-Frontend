import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { indexErequests, postErequests, putErequests, verifyUser } from '../services/api-helper';
import ErequestsList from './erequestsList';
//import SingleErequests from './singleErequests';
import CreateErequestsForm from './createErequestsForm';
import UpdateErequestsForm from './updateErequestsForm';

class ErequestsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        erequests: []
    }
  }

  componentDidMount() {
    verifyUser();
    this.readAllErequests();
  }

  // READ ALL THE E-Requests
  readAllErequests = async () => {
    const erequests = await indexErequests();
    this.setState({ erequests });
  }

  //CREATE THE E-Request
  createerequests = async (erequestsData) => {
    // e.preventDefault()
    console.log(erequestsData);
    const newerequests = await postErequests(erequestsData);
    this.setState({
        erequests: [...this.state.erequests, newerequests]
    })
    this.props.history.push("/erequests");
  }

  // UPDATE THE E-Request
  updateerequests = async (id, erequestsData) => {
    const updatederequests = await putErequests(id, erequestsData);
    const changederequests = this.state.erequests.map(erequests => parseInt(erequests.id) === parseInt(id) ? updatederequests : erequests);
    console.log(changederequests);
    this.setState({ erequests: changederequests });
    this.props.history.push("/erequests");
  }

  render() {
    return (
      <div>
        <Route exact path="/erequests" render={() => (
          <ErequestsList
          erequests={this.state.erequests}
          />
        )} />
        {/* <Route exact path="/erequests/:id" render={(props) => (
          <SingleErequests
          erequestsId={props.match.params.id}
          erequests={this.state.erequests}
          />
        )} /> */}
        <Route path="/erequests/new" render={() => (
          <CreateErequestsForm
            createErequests={this.createErequests}
          />
        )} />
        <Route path="/erequests/:id/edit" render={(props) => (
          <UpdateErequestsForm
          erequests={this.state.erequests}
            updateErequests={this.updateErequests}
            erequestsId={props.match.params.id}
          />
        )} />
      </div>
    )
  }
}

export default withRouter(ErequestsContainer);