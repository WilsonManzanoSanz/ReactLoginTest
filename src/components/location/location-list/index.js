import React, { Component } from 'react';
import {LocationCard} from '../location-card';
import PropTypes from 'prop-types';

class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {list:this.props.locations};
    }

    render() {
        const locations = this.props.locations.map((value,idx) => <LocationCard key={idx} idx={idx} location={value}></LocationCard>);
        return (<div>{locations}</div>
            );
    }

}

LocationList.propTypes = {
    locations: PropTypes.array,
};


export {LocationList};