import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class ProfileCard extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
        <div className="card">
          <h2>Bienvenido a la app</h2>
          <p>Usuario: {this.props.user.email}</p>
       </div>
    );
  }
}

ProfileCard.propTypes = {
  user: PropTypes.object
};

export default ProfileCard;