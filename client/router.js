Router.configure({
	//layoutTemplate:'layout'
});
Router.map(function(){
	this.route('register',{path:'/'});
	this.route('login',{path: '/login'});
	this.route('home',{path:'/home'});
	this.route('about',{path:'/about'});
	this.route('builder',{path:'/builder'});
})
