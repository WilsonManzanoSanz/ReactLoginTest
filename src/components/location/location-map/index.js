import React, { Component } from 'react';
import PropTypes from 'prop-types';

let map = null;

class PlaceMaps extends Component {
    constructor(props) {
        super(props);
        this.id = 'map-detail'+this.props.id;
    }

    componentDidMount() {
        map = new window.google.maps.Map(document.getElementById(this.id), {
            center: this.props.position,
            zoom: 15
        });
        const marker = new window.google.maps.Marker({
            map: map,
            position: this.props.position
        });
    }

    render() {
        return ( <div id={this.id} style={{height:'200px'}}></div>);
        }
    }

    PlaceMaps.propTypes = {
        position: PropTypes.object,
        id: PropTypes.number,
    };

    export default PlaceMaps;