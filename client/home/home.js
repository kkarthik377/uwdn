Template.home.helpers({
	id: function(){
		var id = Meteor.userId();
	if (id != null){
		var status="login";
		}
	else{
		var status="nologin";
		Router.go("login");
	}
		//return Meteor.user().emails[0].address;
		return Meteor.user().emails[0].address;
	}
});
Template.home.events({
'click #logout': function(){
	Meteor.logout();
}
});

Template.home.events({
'click #adduser': function(){
    Router.go("adduser");
}
});
Template.home.events({
'click #myprofile': function(){
    Router.go("myprofile");
}
});


Template.home.events({
'click #dashboard': function(){
    Router.go("home");
}
});

Template.home.events({
'click #createuser': function(){
    Router.go("createuser");
}
});

