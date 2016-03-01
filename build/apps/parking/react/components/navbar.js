MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper blue-grey darken-1" >
        <a href="#" className="brand-logo">Parking Project</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="garages.html">Garages</a></li>
        <li ><a href="team.html">Team Members</a></li>
        </ul>
        </div>

      </nav>


    );
  }
});
