



MyComponents.User = React.createClass({
 render: function() {

   var vals = [];
   

   return (

         <p>{this.props.user.name}</p>


   );
 }
});


MyComponents.UserList = React.createClass({
  render: function() {

    var users = this.props.users.map(function(u,i){
      return <MyComponents.User user={u} key={i}/>
    })

    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>Clients</h4></li>
        {users}
      </ul>
    );
  }
});