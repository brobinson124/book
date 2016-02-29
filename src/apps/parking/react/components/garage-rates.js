MyComponents.Rate = React.createClass({
  render: function() {
    if (this.props.rate.RATE==undefined) {var rate = <li>{' '}</li>}
      else {var rate = <li>{'Rate: $'+ this.props.rate.RATE}</li>}    
    if (this.props.rate.BEG==undefined) {var beg = <li>{' '}</li>}
      else {var beg = <li>{'Start: '+ this.props.rate.BEG}</li>}
    if (this.props.rate.END==undefined) {var end = <li>{' '}</li>}
      else {var end = <li>{'End: '+ this.props.rate.END}</li>}
    if (this.props.rate.DESC==undefined) {var desc = <li>{' '}</li>}
      else {var desc = <li>{'Desc: '+ this.props.rate.DESC}</li>}
    if (this.props.rate.RQ==undefined) {var rq = <li>{' '}</li>}
      else {var rq = <li>{'RQ: '+ this.props.rate.RQ}</li>}
    if (this.props.rate.RR==undefined) {var rr = <li>{' '}</li>}
      else {var rr = <li>{'RR: '+ this.props.rate.RR}</li>}
    
    

    return (<li className="collection-item">{rate} {beg} {end} {desc} {rq} {rr}</li>

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
          <span className="card-title">Rates</span>
            <ul className="collection black-text">
              {rates}
            </ul>
        </div>
      </div>
    );
  }
});
