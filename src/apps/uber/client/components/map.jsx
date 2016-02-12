const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet;

function hasItems(provider, needs) {
    var items = [];
    if (provider.gas) {
        items.push("gas");
    }
    if (provider.vacuum) {
        items.push("clean");
    }
    if (provider.winwash) {
        items.push("fluid");
    }
    if (provider.jump) {
        items.push("jump");
    }
    if (provider.airfresh) {
        items.push("oil");
    }
    for (var i = 0; i < needs.length; ++i){
        const index = items.indexOf(needs[i]);
        if (index < 0 ) return false;
    }
    return true;
}

class MapView extends React.Component {
    render(){

        const providers = this.props.providers;
        const needs = this.props.needs;
        const providerElements = _.map(providers, function(p,i){
            p.pos = [p.lat, p.lon];
            var color = "red";
            if (hasItems(p, needs)) {
                color = "green";
            }
            return <CircleMarker center={p.pos} key={i} color={color}/>;
        });

        let userElement;
        if (this.props.user){
            userElement = <CircleMarker radius={20} center={this.props.user.pos}/>;
        } else {
            userElement = '';
        }

        // Note: .bind(this) is important for the handler function's 'this'
        // pointer to refer to this MapView instance

        var token = 'pk.eyJ1Ijoibmljb3QiLCJhIjoiY2lqdnkzbGQyMGRqY3VjbTVwbDNyOGcxaiJ9.-tW3kDrfp15nLw82zErsjg';
        const mapurl = 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + token;
        return  <Map center={this.props.center}
                     zoom={14}
                     onLeafletClick={this.handleLeafletClick.bind(this)}>
            <TileLayer
                url={mapurl}
                attribution='&copy; <a href="Mapbox.com">Mapbox</a>'
        />
        {providerElements}
        {userElement}
        </Map>;
    }


    handleLeafletClick(event){
        console.log('leaflet click event', event);
        this.props.setUserLocationAction(event.latlng);
    }
}

MyComponents.MapView = MapView;
