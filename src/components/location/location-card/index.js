import React, { Component } from 'react';
import  PlaceMaps  from '../location-map';
import PropTypes from 'prop-types';

class LocationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {showMap:false};
        this.showMap = this.showMap.bind(this);
    }

    showMap(){
        this.setState(
            (prevState) => { 
                return {showMap:!prevState.showMap}
            }
        );
    }

    render() {
        const buttonName = !this.state.showMap ? 'VER MAPA': 'OCULTAR';
        const date = new Date(this.props.location.time.seconds*1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();
        const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return (
        <div className="card">
            <div className="flex">
                <div>
                    <h2 className="nospace">Lectura <small>{formattedTime}</small></h2>
                    <p className="nospace">Fecha {date.toDateString()}</p>
                </div>
                    <span className="spacer"></span>
                    <button style={{height:'40px'}} onClick={this.showMap}>{buttonName}</button>
            </div>
            { this.state.showMap && <PlaceMaps position={this.props.location} id={this.props.idx} />}
        </div>);
    }

}


LocationCard.propTypes = {
    location: PropTypes.object,
    idx: PropTypes.number,
  };

export {LocationCard};