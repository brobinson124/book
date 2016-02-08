
MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card blue">
        <div className="card-content">

          <div className="row">
          <div className="col s3">
          <div className="row about-me-face">

        <img src="profile_pic.jpg" height="200" width="200"/>
        </div>
        </div>
        <div className="col s5">

        <ul>
              <li><b>Name:</b> Brooke Robinson</li>
              <li><b>Major:</b> Computer Science B.S.</li>
              <li><b>Focus:</b> Human Centered Computing</li>
              <li><b>Year:</b> Junior</li>
              <li><b>Birth Place:</b> Alaska</li>
              <li><b>Favorite Color:</b> Blue</li>
              <li><b>Github URL:</b> <a href="https://github.com/brobinson124">www.github.com/brobinson124</a></li>
            </ul>
        </div>

        <div className="col s2">
        </div>

      </div>
      </div>
      </div>
    );
  }

});