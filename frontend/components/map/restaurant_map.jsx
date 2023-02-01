import React from "react";
import MarkerManager from "../../util/marker_manager";


class RestaurantMap extends React.Component {
    
    componentDidMount() {
        const MAP_OPTIONS = {
            center: { lat: 	40.7408058, lng: -73.9967318493297 }, // NYC
            zoom: 13,
            streetViewControl: false, //for streeview
            mapTypeControl: false, //change between satellite image
            fullscreenControl: false //button to toggle fullscreen
        };
        this.map = new google.maps.Map(this.mapNode, MAP_OPTIONS);
        this.MarkerManager = new MarkerManager(this.map);
        if (this.props.restaurant) {
            this.MarkerManager.updateMarkers(this.props.restaurant);
        }   else {
            this.MarkerManager.updateMarkers(this.props.restaurants);
        }
    }

    componentDidUpdate() {
        if (this.props.restaurant) {
            this.MarkerManager.updateMarkers(this.props.restaurant);
        }   else {
            this.MarkerManager.updateMarkers(this.props.restaurants);
        }
    }



    render() {
        
        return (
                <div ref={map => this.mapNode = map} id='map-container'>
                </div>
        )
    }
};


export default RestaurantMap;