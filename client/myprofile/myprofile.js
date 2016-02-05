Meteor.subscribe('myuser');
Template.myprofile.helpers({
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

Template.myprofile.helpers({
	email: function(){
		var email = Meteor.user().emails[0].address;
		return email;
	},
	fname: function(){
		var fname = Meteor.user().profile.fname;
		return fname;
	},
	lname: function(){
		var lname = Meteor.user().profile.lname;
		return lname;
	}    
});

Template.myprofile.events({
'click #logout': function(){
    Meteor.logout();
}
});

Template.myprofile.events({
'click #adduser': function(){
    Router.go("adduser");
}
});
Template.myprofile.events({
'click #myprofile': function(){
    Router.go("myprofile");
}
});


Template.myprofile.events({
'click #dashboard': function(){
    Router.go("home");
}
});

Template.myprofile.events({
'click #createuser': function(){
    Router.go("createuser");
}
});

Template.myprofile.events({
    'focusout #inputRePassword': function(){
        var password = $('[name=password').val();
        var repassword = $('[name=repassword').val();
        if(password == repassword){
            
        }
        else{
            $('[name=password').val('');
            $('[name=repassword').val('');
            alert("ReEnter the new password");
        }
    } 

});

Template.myprofile.events({
    'submit form': function(event){
        event.preventDefault();
        var oldpassword = $('[name=oldpassword]').val();
        var password = $('[name=password]').val();
        var Id = Meteor.userId
        Accounts.changePassword(oldpassword, password, function(err, result){
        	if(err){
        		//console.log(err);
        		$('[name=oldpassword').val('');
        		$('[name=password').val('');
            	$('[name=repassword').val('');
        		alert("Incorrect OldPassword");
        	}
        	else{
        		$('[name=oldpassword').val('');
        		$('[name=password').val('');
            	$('[name=repassword').val('');
        		alert("Successfully Password Changed");
        	}
        }); 
    }
});        