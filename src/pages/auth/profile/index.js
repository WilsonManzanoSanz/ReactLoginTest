import React, {Component} from 'react';
import {authService} from '../../../services/auth';
import { connect } from 'react-redux';
import  ProfileCard from '../../../components/auth/profile-card';

class ProfilePage extends Component {
    constructor(props){
        super(props);
        console.log(this.props.user);
      }
      render(){
        return (
        <div className="center-card">
            <ProfileCard user={this.props.user} />
        </div>);
      }
}

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps)(ProfilePage);