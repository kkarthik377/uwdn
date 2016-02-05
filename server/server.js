if (Meteor.isServer){
    Meteor.startup(function (){
        Meteor.methods({
            adduser: function(details){
                var id = Accounts.createUser(details);
        
        return id;

            }
        });
        Meteor.methods({
            deleteuser: function(user){
                var id = Meteor.users.remove(user);
                return id;

            }
        });
        Meteor.publish("myuser", function(){
        	return Meteor.users.find();
        });

        


    });


}