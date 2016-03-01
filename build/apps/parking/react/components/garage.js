// Dependencies:
// - MyComponents.GarageSpaces
// - MyComponents.GarageTitle
// - MyComponents.GarageHours
// - MyComponents.GarageRates

MyComponents.Garage = React.createClass({
  render: function() {
    return (      
      <div className="card blue-grey lighten">
        <div className="card-content">
        	<MyComponents.GarageTitle title={this.props.garage.friendlyName}/>
        </div>
        <div className="card-action">
	        <div className="row">
	        	<div className="col s6">
	        		<div className="row">
		        		<MyComponents.GarageSpaces 
		        		open={this.props.garage.open_spaces}
		        		total={this.props.garage.total_spaces}/>
		        	</div>
		        	<div className="row">
						<MyComponents.GarageHours
						hours={this.props.garage.hours}/>
		        	</div>
		        </div>	
	        	<div className="col s6">
	        		<MyComponents.GarageRates
	        			rates={this.props.garage.rates}/>
	        	</div>
	        	
        	</div>
        </div>
      </div>
    );
  }
});