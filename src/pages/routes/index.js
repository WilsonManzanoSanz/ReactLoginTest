import React, { Component } from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
// Pages
import LoginPage from '../auth/login';
import LocationsPage from '../locations';
import AboutPage from '../about';
import ProfilePage from '../auth/profile';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Boolean(JSON.parse(localStorage.getItem('loggedUser')))  && Boolean(JSON.parse(localStorage.getItem('loggedUser')).email)
      ? <Component {...props} />
      : <Redirect to='/auth/login' />
  )} />
)

class Main extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <div className="main-container" id="main-container" ref="main-container">
      <Switch>
        <PrivateRoute exact path="/" component={LocationsPage}/>
        <PrivateRoute path="/auth/profile" component={ProfilePage}/>
        <Route exact path="/auth/login" component={LoginPage} />
        <Route exact path="/about" component={AboutPage} />
        <PrivateRoute component={LocationsPage} />
      </Switch> 
    </div>);
  }
}
  

export {Main};
