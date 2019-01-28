import React, { Component } from 'react';
import render from 'react-dom';
import { LocationList } from '../../components/location/location-list';
import { locationService } from '../../services/location';

class LocationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { locations: [] };
        console.log('Locations page');
    }

    componentDidMount() {
        locationService.getLocations()
            .then(docs => {
                this.setState({ locations: docs });
            })
            .catch(error => console.error(error));
    }

    render() {
        return ( < div className = "container center-card" >
            <
            LocationList locations = { this.state.locations }
            /> <
            /div>)
        }
    }

    export default LocationsPage;