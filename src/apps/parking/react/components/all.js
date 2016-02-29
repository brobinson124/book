// Dependencies:
// - MyComponents.GarageSpaces
// - MyComponents.GarageTitle
// - MyComponents.GarageHours
// - MyComponents.GarageRates

// GarageSpaces MyComponents
MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Availability Information</h3>
          <ul>
            <li><b>{'Open Spots: '}</b>{ this.props.open}</li>
            <li><b>{'Total Spots: '}</b>{this.props.total}</li>
          </ul>
        </div>
      </div>
    );
  }
});

// GarageTitle MyComponents
MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{this.props.title}</h1>          
        </div>
      </div>
    );
  }
});

// Hour MyComponents
MyComponents.Hour = React.createClass({
  render: function() {
    if (this.props.hour.BEG==undefined) {var beg = <li>{' '}</li>}
      else {var beg = <li>{'START: '+ this.props.hour.BEG}</li>}
    if (this.props.hour.END==undefined) {var end = <li>{' '}</li>}
      else {var end = <li>{'END: '+ this.props.hour.END}</li>}
    if (this.props.hour.FROM==undefined) {var from = <li>{' '}</li>}
      else {var from = <li>{'FROM: '+ this.props.hour.FROM}</li>}
    if (this.props.hour.TO==undefined) {var to = <li>{' '}</li>}
      else {var to = <li>{'TO: '+ this.props.hour.TO}</li>}

    return (
      <div className="card">
        <div className="card-content">
          <ul>
          {beg}
          {end}
          {from}
          {to}
          </ul>
        </div>
      </div>
    );
  }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          <h3>Hour Information</h3>

          { hours }

        </div>
      </div>
    );
  }
});

// Rate MyComponents
MyComponents.Rate = React.createClass({
  render: function() {
    if (this.props.rate.BEG==undefined) {var beg = <li>{' '}</li>}
      else {var beg = <li>{'START: '+ this.props.rate.BEG}</li>}
    if (this.props.rate.END==undefined) {var end = <li>{' '}</li>}
      else {var end = <li>{'END: '+ this.props.rate.END}</li>}
    if (this.props.rate.DESC==undefined) {var desc = <li>{' '}</li>}
      else {var desc = <li>{'DESC: '+ this.props.rate.DESC}</li>}
    if (this.props.rate.RQ==undefined) {var rq = <li>{' '}</li>}
      else {var rq = <li>{'RQ: '+ this.props.rate.RQ}</li>}
    if (this.props.rate.RR==undefined) {var rr = <li>{' '}</li>}
      else {var rr = <li>{'RR: '+ this.props.rate.RR}</li>}

    return (
      <div className="card">
        <div className="card-content">
          <ul>
            <li>{'RATE: $' + this.props.rate.RATE}</li>
            {beg}
            {end}
            {desc}
            {rq}
            {rr}
          </ul>
        </div>
      </div>
    );
  }
});


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          <h3>Rate Information</h3>

          { rates }

        </div>
      </div>
    );
  }
});


//Garage
MyComponents.Garage = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <MyComponents.GarageTitle
            title={this.props.garage.friendlyName}/>
          <MyComponents.GarageSpaces
            open={this.props.garage.open_spaces}
            total={this.props.garage.total_spaces}/>
          <MyComponents.GarageRates
            rates={this.props.garage.rates}/>
          <MyComponents.GarageHours
            hours={this.props.garage.hours}/>
        </div>
      </div>
    );
  }
});

