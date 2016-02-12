class App extends React.Component {
    render(){
        return <div>
            <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
            <div className="card">
                <MyComponents.MapView
                    providers={this.props.data.providers}
                    center={this.props.data.center}
                    user={this.props.data.user}
                    needs={this.props.data.needs}
                    setUserLocationAction={this.props.actions.setUserLocation}/>
            </div>
            <MyComponents.Needs actions={this.props.actions}/>
        </div>;
    }
}

MyComponents.App = App;
