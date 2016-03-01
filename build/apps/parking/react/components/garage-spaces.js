MyComponents.GarageSpaces = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Spaces</span>
          <ul className="collection black-text">
            <li className="collection-item">Open Spaces: {this.props.open}</li>
            <li className="collection-item">Total Spaces: {this.props.total}</li>
          </ul>
        </div>
      </div>
    );
  }
});
