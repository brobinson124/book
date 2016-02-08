MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper blue">
        <a href="#" className="brand-logo">Brooke</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#skills-heading">Skills</a></li>
          <li><a href="#tasks-heading">Tasks</a></li>
          <li><a href="#cities-heading">Cities</a></li>          
        </ul>
        </div>
      </nav>
    );
  }
});
