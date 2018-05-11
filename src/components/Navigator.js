// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { firebaseAuth } from '../base/base';

// class Navigator extends Component {
//   logout = () => {
//     return firebaseAuth().signOut()
//   }  

//   render() {
//     let logLink = null;
//     if (this.props.isAuthenticated)
//       logLink = <button className="btn btn-link" onClick={this.logout}>Logout</button>;
//     else
//       logLink = <Link className="nav-link" to="/login">Login</Link>;

//     return (
//       <div>     
//       </div>
//     );
//   }
// }

// export default Navigator;