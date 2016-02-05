if (Meteor.isClient) {

      Template.login.helpers({
    id: function(){
        var id = Meteor.userId();
    if (id != null){
        var status="login";
        Router.go("home");
        }
    else{
        var status="nologin";
        
    }
        //return Meteor.user().emails[0].address;
    }
    });

    Template.dashboard.events({
    'click.logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });

	Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
                $('[name=password]').val('');
                alert("invalid username or password");
            } else {
                var currentRoute = Router.current().route.getName();
                if(currentRoute == "login"){
                    Router.go("home");
                }
            }
        });
        
    }
});
}    

    