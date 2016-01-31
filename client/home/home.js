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
		return status;
	}
});
Template.home.events({
'click #logout': function(){
	Meteor.logout();
}
});

Template.home.events({
'click #dashboard': function(){
	Router.go("home");
}
});
