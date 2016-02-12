
const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class ProviderMap extends React.Component {
  render(){
  	console.log(this.props.providers)
    const providers = this.props.providers
    const providerElements = _.map(providers, function(p,i){
      return <Marker position={p.pos} key={i}>
        <Popup>
          <span>{p.username}</span>
          <span>{p.status}</span>
        </Popup>
      </Marker>
    })

    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    var token = 'pk.eyJ1Ijoibmljb3QiLCJhIjoiY2lqdnkzbGQyMGRqY3VjbTVwbDNyOGcxaiJ9.-tW3kDrfp15nLw82zErsjg'
    const mapurl = 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + token
    return  <Map center={this.props.center}
          zoom={14}>
        <TileLayer
          url={mapurl}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {providerElements}
      </Map>
  }
}

MyComponents.ProviderMap = ProviderMap

