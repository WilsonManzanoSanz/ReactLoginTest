import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginCard from '../../../components/auth/login-card';

class LoginPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="center-card">
      <LoginCard history={this.props.history}/>
    </div>);
  }
}

export default LoginPage;