if (Meteor.isClient) {

    Template.register.helpers({
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

Template.register.events({
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
                Router.go("login");
            }

        });
        
        /*Accounts.createUser({
            password: password,
            email: email,
            profile: {
                fname: fname,
                lname: lname
            },
            login: false           
            
        }, function(error){
            if(error){
                console.log(error.reason);
            } else {
                Meteor.logout();
                Router.go("login");
            }
        });*/
        
    }
});
    Template.register.events({
        'focusout #inputRePassword': function(){
            var password = $('[name=password').val();
            var repassword = $('[name=repassword').val();
            if(password == repassword){
                
            }
            else{
                $('[name=password').val('');
                $('[name=repassword').val('');
                alert("incorrect password");
            }
        } 

    });
}


