import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Home from './components/Home';
import Customerslist from './components/Customerslist';
import Trainingslist from './components/Trainingslist';
import Calendar from './components/Calendar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <BrowserRouter>
      <div>
      <Link to="/">Frontpage</Link>{' '}
      <Link to="home">Home</Link>{' '}
      <Link to="customers">Customers</Link>{' '}
      <Link to="trainings">Trainings</Link>{' '}
      <Link to="calendar">Calendar</Link>{' '}

      <Switch>
        <Route exact path= "/" render={() => <h2>This is the main page</h2>}/>
        <Route path = "/home" component={Home}/>
        <Route path = "/customers" component={Customerslist}/>
        <Route path = "/trainings" component={Trainingslist}/>
        <Route path = "/calendar" component={Calendar}/>
        </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
