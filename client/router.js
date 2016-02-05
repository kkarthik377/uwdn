Router.configure({
	//layoutTemplate:'layout'
});
Router.map(function(){
	this.route('register',{path:'/'});
	this.route('login',{path: '/login'});
	this.route('home',{path:'/home'});
	this.route('usercontrol',{path:'/usercontrol'});
	this.route('myprofile',{path:'/myprofile'});
	this.route('createuser',{path:'/createuser'});
	this.route('updateuser',{path:'/updateuser/:userid',
				data:function(){
					console.log("my id is " + this.params.userid);
					return {userid:this.params.userid};
				}
				});
	
});
