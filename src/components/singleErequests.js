import React, { Component } from "react";
import { showErequests } from "../services/api-helper";

export default class SingleErequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentErequest: {}
    };
  }

  setcurrentErequest = async () => {
    const currentErequest = await showErequests(this.props.erequestsId);
    this.setState({ currentErequest });
  };

  componentDidMount() {
    this.setcurrentErequest();
  }


  render() {
    console.log(this.props.erequestsId);
    console.log(this.state.currentErequest);
    return (
      <div className='singleErequest'>
        {this.state.currentErequest && (
          <>
            <div><h1>{this.state.currentErequest.title}</h1></div>
            <div><h4>Description:</h4>
              <div className='erequestDesc'>
                <p>{this.state.currentErequest.request}</p>
              </div> 
            </div>
            <div>
              <h4>Funding Source:</h4>
              <input value = {this.state.currentErequest.requestType}/>
            </div>
            <div>
              <h4>Request ID:</h4>
              <input value = {this.state.currentErequest.requestID} />
            </div>
            <div>
              <h4>Created By:</h4>
              <input value = {this.state.currentErequest.created_by} />
            </div>
            <div>
              <h4>Date:</h4>
              <input value = {this.state.currentErequest.created_at} />
            </div>
            <div>
              <h4>Last Update:</h4>
              <input value = {this.state.currentErequest.updated_at} />
            </div>

            <button>
              <h3>Update</h3>
            </button>
          </>
        )}
      </div>
    );
  }
}