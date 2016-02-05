Meteor.subscribe('myuser');
Template.createuser.helpers({
	id: function(){
		var id = Meteor.userId();
	if (id != null){
		var status="login";
		}
	else{
		var status="nologin";
		Router.go("login");
	}
		return Meteor.user().emails[0].address;
	}    
});

Template.createuser.events({
        'focusout #inputRePassword': function(){
            var password = $('[name=password]').val();
            var repassword = $('[name=repassword]').val();
            if(password == repassword){
                
            }
            else{
                $('[name=password]').val('');
                $('[name=repassword]').val('');
                alert("incorrect password");
            }
        } 

});

Template.createuser.events({
    'submit form': function(event){
        event.preventDefault();
        var fname = $('[name=fname]').val();
        var lname = $('[name=lname]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.call('adduser',{password:password, email:email, profile:{fname:fname,lname:lname}},function(err,result){
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                var fname = $('[name=fname]').val('');
                var lname = $('[name=lname]').val('');
                var email = $('[name=email]').val('');
                var password = $('[name=password]').val('');
                var password = $('[name=repassword]').val('');
                alert("User Add Successfully");
                
            }

        });
    }
});

Template.createuser.events({
'click #logout': function(){
    Meteor.logout();
}
});

Template.createuser.events({
'click #adduser': function(){
    Router.go("adduser");
}
});
Template.createuser.events({
'click #myprofile': function(){
    Router.go("myprofile");
}
});


Template.createuser.events({
'click #dashboard': function(){
    Router.go("home");
}
});

Template.createuser.events({
'click #createuser': function(){
    Router.go("createuser");
}
});
