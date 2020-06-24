import React, { Component } from 'react';

export default class CreateErequestsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      request: "",
      requestID: "",
      requestType: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.createErequests(this.state)
      }}>
        <input
          type="text"
          name="title"
          placeholder="Request Title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="request"
          placeholder="Request"
          value={this.state.request}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="requestID"
          placeholder="requestID"
          value={this.state.requestID}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="requestType"
          placeholder="Type of Request"
          value={this.state.requestType}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}