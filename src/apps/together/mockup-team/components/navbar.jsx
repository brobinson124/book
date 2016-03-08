class NavBar extends React.Component {

    render(){
        return (
            <nav>
                <nav class="navbar-fixed-top">
                <div class="nav-wrapper black darken-1">

                    <a href="index.html" class="brand-logo right">Music_Together</a>
                    
                    <MyComponents.User
                        user={this.props.data.user}
                        loginAction={this.props.actions.login}
                        logoutAction={this.props.actions.logout}/>
                </div>
            </nav>
            </nav>
        );
    }

}
MyComponents.NavBar = NavBar;
