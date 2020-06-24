import React from 'react';
import { Link } from 'react-router-dom';

 function ErequestsList(props) {
  console.log(props)
  return (
    <div>
      {props.erequests && props.erequests.map(erequests => (
        <div key={erequests.id}>
          <Link to={`/erequests/${erequests.id}`}><h3>{erequests.title}</h3></Link>
        </div>
      ))}
      <Link to="/erequests/new"><button>Add an Erequest</button></Link>
    </div>
  )
 }

 export default ErequestsList