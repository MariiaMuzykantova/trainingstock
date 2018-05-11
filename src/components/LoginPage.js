// import React, { Component } from 'react';
// import { firebaseAuth } from '../base/base';
// import { ToastContainer, toast } from 'react-toastify';
// import { Redirect } from 'react-router-dom';

// class LoginPage extends Component {
//   state = { email: '', password: '', redirect: false};

//   resetPassword = (event) => {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     firebaseAuth().sendPasswordResetEmail(email).then(function() {
//       toast.success("Password reset email sent.", {
//         position: toast.POSITION.TOP_RIGHT
//       });
//     }).catch(function(error) {
//       toast.error("Error in resetting password. Type your email to email field.", {
//         position: toast.POSITION.TOP_RIGHT
//       });
//     });    
//   }

//   onLoginClick = (event) => {
//     event.preventDefault();

//     const { email, password } = this.state;
//     firebaseAuth().signInWithEmailAndPassword(email, password)
//       .then(() => {
//         // Redirect 
//         this.setState({ redirect: true }); 
//       })
//       .catch(() => {
//         // No account found. Create a new one and send verification email
//         firebaseAuth().createUserWithEmailAndPassword(email, password)
//           .then(() => { 
//             var user = firebaseAuth().currentUser;
//             console.log(user);
//             user.sendEmailVerification().then(function() {
//               toast.success("Verifiaction email sent.", {
//                 position: toast.POSITION.TOP_RIGHT
//               });
//             }).catch(function(error) {
//               toast.error("Error in authentication.", {
//                 position: toast.POSITION.TOP_RIGHT
//               });
//             });
//            })
//           .catch(() => {
//             toast.error("Could not login. Check your email and password.", {
//               position: toast.POSITION.TOP_RIGHT
//             });           
//           });
//       });
//   }

//   handleChange = (event) => {
//     this.setState({[event.target.name]: event.target.value});
//   }

//   render() {
//     if (this.state.redirect) {
//       return (<Redirect to='/' />);
//     }

//     return (
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-md-12">
//           <h2 className="text-center text-white mb-4">Login Form</h2>
//             <div className="row">
//               <div className="col-md-6 mx-auto">
//                 <span className="anchor" id="formLogin"></span>
//                 <div className="card rounded-0">
//                   <div className="card-header">
//                     <h3 className="mb-0">Login</h3>
//                   </div>
//                   <div className="card-body">
//                     <form className="form" role="form" id="formLogin">
//                       <div className="form-group">
//                         <label>Email</label>
//                         <input type="text" id="email" className="form-control form-control-lg rounded-0"  name="email" onChange={this.handleChange} placeholder='email@domain.com' />
//                       </div>
//                       <div className="form-group">
//                         <label>Password</label>
//                         <input type="password" className="form-control form-control-lg rounded-0" name="password" onChange={this.handleChange} />
//                       </div>
//                         <button onClick={this.resetPassword} className="btn btn-link float-left">Forgot password?</button>
//                         <button onClick={this.onLoginClick} className="btn btn-success btn-lg float-right">Login</button>
//                       </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ToastContainer />
//       </div>      
//     );
//   }
// }

// export default LoginPage;












// // import React, {Component} from 'react';
// // import base from '../base/base';
// // import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
// // //import { Firebase } from '../firebase/Firebase';
// // //import { ToastContainer, toast } from 'react-toastify';
// // //import { Redirect } from 'react-router-dom';

// // class LoginPage extends Component {
// //   //state = { email: '', password: '', redirect: false};
// //   constructor(props) {
// //     super(props);
// //     this.renderLogin = this.renderLogin.bind(this);
// //     this.authenticate = this.authenticate.bind(this);
// //     this.authHandler = this.authHandler.bind(this);
// //     this.state = {
// //       userid: null,
// //       owner: null
// //     } 
// //   }

// //   authenticate(provider) {
// //     console.log(`Trying to log in with ${provider}`);
// //     base.signInWithEmailAndPassword(provider, this.authHandler)

// //   }

// //   authHandler(err, authData) {
// //     console.log(authData);
// //     if(err) {
// //       console.error(err);
// //       return;
// //     }
// //   }

  

// //   renderLogin() {
// //     return(
// //       <nav className = "login">
// //         <h2>Login:</h2>
// //         <button className = "github" onClick={() => this.authenticate('github')}>Log in with github</button>
// //         <button className = "facebook" onClick={() => this.authenticate('facebook')}>Log in with facebook</button>
// //         <button className = "twitter" onClick={() => this.authenticate('twitter')}>Log in with twitter</button>
// //       </nav>
// //     )
// //   }
// //   render() {
// //     const logout = <button>Log out!</button>
// //     //check if they are not log in at all
// //     if(!this.state.userid) {
// //       return <div>{this.renderLogin()}</div>
// //     }
// //     //check is they are the owner of this site
// //     if(this.state.userid !== this.state.owner) {
// //       return (
// //         <div>
// //           <p>Sorry you are not the owner of this site</p>
// //           {logout}
// //         </div>
// //       )
// //     }

// //   }

// // }

// // export default LoginPage;