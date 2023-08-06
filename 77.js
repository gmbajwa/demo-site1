console.log(' ');
console.log('77.js is working........................ ');
console.log(' ');
console.log('OOP in JS................ ');
console.log(' ');
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	about: function(){
		return 'return form annonymus function';
	}
}
console.log(' ', userObj.about());
console.log(' ');
console.log('Makinf Object Orientation 1: ');
const userObj2 = {
	id: 2, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	age: 9,
	about(){
		return `user id is ${this.id} and user first name is ${this.fname}.`;
	},

	info(){
		return `User name is ${this.username}.`;
	},

	is18(){

		return `User age is ${this.age}.`;

	}

}
console.log(' ');
console.log(' ', userObj2.about());
console.log(' ');
console.log(' ', userObj2.info());
console.log(' ');
console.log(' ', userObj2.is18());
console.log(' ');
console.log('Problem: Make 5 Object: ');
console.log(' ');
const userObj3 = {
	id: 3, 
	fname: 'Daleem',  
	username: 'username3', 
	email: 'email1@g.com3',
	age: 19,
	about(){
		return `user id is ${this.id} and user first name is ${this.fname}.`;
	},

	info(){
		return `User name is ${this.username}.`;
	},

	is18(){

		return `User age is ${this.age}.`;

	}

}
const userObj4 = {
	id: 4, 
	fname: 'jaleem',  
	username: 'username4', 
	email: 'email1@g.com4',
	age: 92,
	about(){
		return `user id is ${this.id} and user first name is ${this.fname}.`;
	},

	info(){
		return `User name is ${this.username}.`;
	},

	is18(){

		return `User age is ${this.age}.`;

	}

}
const userObj5 = {
	id: 5, 
	fname: 'haleem',  
	username: 'username5', 
	email: 'email1@g.com5',
	age: 2,
	about(){
		return `user id is ${this.id} and user first name is ${this.fname}.`;
	},

	info(){
		return `User name is ${this.username}.`;
	},

	is18(){

		return `User age is ${this.age}.`;

	}

}
const userObj6 = {
	id: 6, 
	fname: 'taleem',  
	username: 'username6', 
	email: 'email1@g.com6',
	age: 5,
	about(){
		return `user id is ${this.id} and user first name is ${this.fname}.`;
	},

	info(){
		return `User name is ${this.username}.`;
	},

	is18(){

		return `User age is ${this.age}.`;

	}

}
const userObj7 = {
	id: 7, 
	fname: 'yaleem',  
	username: 'username7', 
	email: 'email1@g.com7',
	age: 34,
	about(){
		return `user id is ${this.id} and user first name is ${this.fname}.`;
	},

	info(){
		return `User name is ${this.username}.`;
	},

	is18(){

		return `User age is ${this.age}.`;

	}

}
console.log(' ');
console.log(' ', userObj3.about());
console.log(' ');
console.log(' ', userObj3.info());
console.log(' ');
console.log(' ', userObj3.is18());
console.log(' ');
console.log('Object Orientation 2: ');
console.log(' ');
console.log('What if we are in need to construct Billieon of Object then so? ');
console.log(' ');
console.log('Ans: make a functiion which construct the object and return that object. ');
console.log(' ');
function createUser(id, fName, userName, email, age){
	const user = {};
	// Object defining
	user.id = id;
	user.fname = fName;
	user.username = userName;
	user.email = email;
	user.age = age;
	// Object Usage
	user.about = function(){
		return `User id is ${this.id} and user first name is ${this.username}`;
	};

	user.info = function(){
		return `User Email is ${this.email}.`;
	};

	user.is18 = function(){
	
		return `User age is ${this.age}.`;

	};
	
	return user;
}
console.log('calling createUser function to create objects 8');
const user8 = createUser(8, 'fname8', 'username8', 'email8', 44);
console.log(' ');
console.log(' ', user8);
console.log(' ');
console.log('using methods of object 8 ', );
console.log(' ');
console.log(' ', user8.about());
console.log(' ');
console.log(' ', user8.info());
console.log(' ');
console.log(' ', user8.is18());
console.log(' ');
console.log('calling createUser function to create objects 9');
const user9 = createUser(9, 'fname9', 'username9', 'email9', 9);
console.log(' ');
console.log(' ', user9);
console.log(' ');
console.log('using methods of object 9 ', );
console.log(' ');
console.log(' ', user9.about());
console.log(' ');
console.log(' ', user9.info());
console.log(' ');
console.log(' ', user9.is18());
console.log(' ');
console.log('calling createUser function to create objects 10');
const user10 = createUser(10, 'fname10', 'username10', 'email10', 10);
console.log(' ');
console.log(' ', user10);
console.log(' ');
console.log('using methods of object 10 ', );
console.log(' ');
console.log(' ', user10.about());
console.log(' ');
console.log(' ', user10.info());
console.log(' ');
console.log(' ', user10.is18());
console.log(' ');
console.log('calling createUser function to create objects 11');
const user11 = createUser(11, 'fname11', 'username11', 'email11', 11);
console.log(' ');
console.log(' ', user11);
console.log(' ');
console.log('using methods of object 11 ', );
console.log(' ');
console.log(' ', user11.about());
console.log(' ');
console.log(' ', user11.info());
console.log(' ');
console.log(' ', user11.is18());
console.log(' ');
console.log('calling createUser function to create objects 12');
const user12 = createUser(12, 'fname12', 'username12', 'email12', 12);
console.log(' ');
console.log(' ', user12);
console.log(' ');
console.log('using methods of object 12 ', );
console.log(' ');
console.log(' ', user12.about());
console.log(' ');
console.log(' ', user11.info());
console.log(' ');
console.log(' ', user11.is18());
console.log(' ');
