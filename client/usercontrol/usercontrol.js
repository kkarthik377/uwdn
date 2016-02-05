Meteor.subscribe('myuser');
Template.usercontrol.helpers({
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

Template.usercontrol.helpers({
    list: function(){
        return Meteor.users.find();
    }

});

Template.usercontrol.events({
'click #logout': function(){
    Meteor.logout();
}
});
Template.usercontrol.events({
'click #adduser': function(){
    Router.go("adduser");
}
});
Template.usercontrol.events({
'click #myprofile': function(){
    Router.go("myprofile");
}
});


Template.usercontrol.events({
'click #dashboard': function(){
    Router.go("home");
}
});

Template.usercontrol.events({
'click #createuser': function(){
    Router.go("createuser");
}
});

Template.usercontrol.events({
'click #newuser': function(){
    Router.go("createuser");
}
});

Template.usercontrol.events({
    'submit #deleteuser': function(event){
        event.preventDefault();
        var id = event.target.userid.value;
        if(id == Meteor.userId()){
            alert("You Enter the Current userid");
        }
        else{
            if (confirm("Are you sure!") == true) {
                Meteor.call('deleteuser',{_id:id}, function(err,result){
                if(err){
                    console.log(err);
                }
                else{
                    if(result == 1){
                        //alert("Removed");
                    }
                    else{
                        //alert("No such User");
                    }
                }
            });
            }
            else {
                txt = "You pressed Cancel!";
            }
            
        }
    },
    'submit #updateuser': function(event){
        event.preventDefault();
        var id = event.target.userid.value;
        Router.go("updateuser",{userid: id});
        //alert(id);
    }


});

