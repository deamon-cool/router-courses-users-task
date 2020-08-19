import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
          </ul>

          <Switch>
            <Route path='/' exact render={() => <h1>Main Page</h1>} />
            <Route path='/courses' component={Courses} />
            <Route path='/users' exact component={Users} />
            <Route path='/not-found' exact render={() => <h1>404 Not Found</h1>} />
            <Redirect to='/not-found' />
          </Switch>

          <ol style={{ textAlign: 'left' }}>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
