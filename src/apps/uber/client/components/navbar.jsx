class NavBar extends React.Component {

    render(){
        return (
            <nav>
                <div className="nav-wrapper blue-grey darken-1">
                    <a className="brand-logo center">Refresh Your Ride</a>
                    <a className="brand-logo right">Client</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="https://github.com/{this.props.user}">{this.props.user}</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </nav>
        );
    }

}
MyComponents.NavBar = NavBar
