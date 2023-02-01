
class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.restaurantObjects = {};
    }

    updateMarkers(restaurants) {

        if (!Array.isArray(restaurants)) return null;
        let markerKeys = Object.keys(this.markers);

        markerKeys.forEach(markerKey => {
            this.markers[markerKey].setMap(null)
            delete this.markers[markerKey]
        })

        restaurants.forEach(restaurant => this.restaurantObjects[restaurant.id] = restaurant);

        restaurants.forEach( (restaurant,idx) => {
            if (!this.markers[restaurant.id]) {
                this.restaurantObjects[restaurant.id] = restaurant;
                this.createMarkerfromrestaurant(restaurant, (idx + 1))
            }
        })

        
    }

    createMarkerfromrestaurant(restaurant, index) {
        
        let position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
        let marker = new google.maps.Marker({
            position,
            map: this.map,
            restaurantId: restaurant.id,
            label: {text: index.toString(), color: 'white'}
        })
        
        this.markers[restaurant.id] = marker;
        this.markers[restaurant.id].setMap(this.map);

        let content = '<div id="map-info-window">' +
                            '<div>' +
                                '<img id="map-info-window-photo" src=' +
                                    restaurant.photoUrls[0] +
                                '/>' +
                                '<div id="map-info-window-name">' +
                                    restaurant.name +
                                '</div>' +
                                '<div id="map-info-window-category">' +
                                    restaurant.category + " " + restaurant.price +
                                '</div>' +
                                '<div id="map-info-window-hours">' +
                                    restaurant.hours +
                                '</div>' +
                            '</div>' +
                        '</div>'
        // let content = 'hello'
        const infoWindow = new google.maps.InfoWindow({
            content
        });

        marker.addListener("mouseover", () => {
            infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: false
            })
        })

        marker.addListener("mouseout", () => {
            infoWindow.close()
        })

        marker.addListener("click", () => {
            window.location.href = `/#/restaurants/${restaurant.id}`
        })
    }

};


export default MarkerManager;

