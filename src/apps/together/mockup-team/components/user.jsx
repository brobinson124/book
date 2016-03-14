class User extends React.Component {

    render(){


console.log(this.props)
        if (this.props.user){
            var u = this.props.user.name;
            // user is authenticated
            return <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="signup.html">Sign Up!</a></li>
                <li><a href="newscore.html">New Score</a></li>
                <li><a href="friend.html">Find Friends</a></li>
                <li><a href={"https://github.com/" + u}>{u}</a></li>
                <li><a className="right" href="#" onClick={this.props.logoutAction}>Logout</a></li>
            </ul>;
        } else {
            return <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="signup.html">Sign Up!</a></li>
                <li><a href="newscore.html">New Score</a></li>
                <li><a href="friend.html">Find Friends</a></li>
                <li><a href="#" onClick={this.props.loginAction}>Login</a></li>
            </ul>;
        }
    }

}
MyComponents.User = User;
