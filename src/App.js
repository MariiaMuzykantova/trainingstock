import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Home from './components/Home';
import Customerslist from './components/Customerslist';
import Trainingslist from './components/Trainingslist';
import MyApp from './components/MyApp';
import LoginPage from './components/LoginPage';
import Navigator from './components/Navigator';
//import base from '../base/base';
import { firebaseAuth } from './base/base';


const PrivateRoute = ({ component: Component, ...rest, isAuthenticated }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null, isAuthenticated : false};
  }


  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        this.setState({ user: user, isAuthenticated: true });      
      } 
      else {
        this.setState({ user: null, isAuthenticated: false });      
      }
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <BrowserRouter>
      <div>
      <Link to="">Loginpage</Link>{' '}
      <Link to="home">Home</Link>{' '}
      <Link to="customers">Customers</Link>{' '}
      <Link to="trainings">Trainings</Link>{' '}
      <Link to="calendar">Calendar</Link>{' '}
      <Navigator isAuthenticated={this.state.isAuthenticated} />
      <Switch>
        <Route exact path= "/" component={LoginPage}/> 
        <Route path = "/home" component={Home}/>
        <PrivateRoute isAuthenticated={this.state.isAuthenticated} path = "/customers" component={Customerslist}/>
        <PrivateRoute isAuthenticated={this.state.isAuthenticated} path = "/trainings" component={Trainingslist}/>
        <PrivateRoute isAuthenticated={this.state.isAuthenticated} path = "/calendar" component={MyApp}/>
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
