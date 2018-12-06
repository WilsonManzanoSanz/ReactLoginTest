import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import {authService} from '../../../services/auth'

class LoginCard extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', password:'', error:{email: false, password:false}};
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    if(e.target.name === 'password'){
      if(e.target.value.length < 6){
        this.setState((prevState) => {
          return { error: { ...prevState.error, ...{password:true} }};
        });
      }else {
        this.setState((prevState) => {
          return { error: { ...prevState.error, ...{password:false} }};
        });
      }
    }
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validatorEmail = regExp.test(String(e.target.value).toLowerCase());
    if(e.target.name === 'email'){
      if(!validatorEmail){
        this.setState((prevState) => {
          return { error: {...prevState.error, ...{email:true} } };
        });
      }else {
        this.setState((prevState) => {
          return { error: { ...prevState.error, ...{email:false}} };
        });
      }
    }
  }
  
  submitLogin(e){
    e.preventDefault();
    let validForm = true;
    for (let property in this.state.error) {
      if(this.state.error[property]){
        validForm = false;
      }
    }
    if(validForm){
      authService.attemptLogin().then(response => console.log(response)).catch(error => console.error(error));
    }
  }
  
  render() {
    return (
        <Card >
          <h1 className="main-tittle" id="main-tittle">Login</h1>
          <form onSubmit={this.submitLogin} noValidate autoComplete="off">
            <TextField className="full-width" type="text" name="email" value={this.state.email} label="Email" id="login-input-email" onChange={this.handleChange} error={this.state.error.email} required/>
            <TextField  className="full-width" type="password" name="password" value={this.state.password}  label="Passsword" id="login-input-password" onChange={this.handleChange} error={this.state.error.password} required/>
            <Button type="submit" className="center-button" variant="contained" color="primary" style={{margin:'20px'}}>LOGIN</Button>
          </form>
        </Card >
    );
  }
}

export default LoginCard;