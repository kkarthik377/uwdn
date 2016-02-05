Meteor.subscribe('myuser');
Template.updateuser.helpers({
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

Template.updateuser.helpers({
	email: function(){
        var db = Meteor.users.findOne({_id: this.userid});
        var email = db.emails[0].address;
		return email;
	},
	fname: function(){
        var db = Meteor.users.findOne({_id: this.userid});
		var fname = db.profile.fname;
		return fname;
	},
	lname: function(){
        var db = Meteor.users.findOne({_id: this.userid});
		var lname = db.profile.lname;
		return lname;
	}    
});

Template.updateuser.events({
'click #logout': function(){
    Meteor.logout();
}
});


Template.updateuser.events({
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

Template.updateuser.events({
    'submit form': function(event){
        event.preventDefault();
        var oldpassword = $('[name=oldpassword]').val();
        var password = $('[name=password]').val();
        //var Id = Meteor.userId
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