console.log(' ');
console.log('74.js is working............ ');
console.log(' ');
console.log('When method is storing in veriable then do binding ');
console.log(' ');
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	about: function(){
		return { id: this.id,
			fname: this.fname,
			username: this.username,
			email: this.email
		}
	}

}
console.log('storing method in veriable at global scope where this point to window obj');
let info = userObj.about;
console.log('log 1 ', info());
console.log(' ');
let infoo = userObj.about.bind(userObj);
console.log('log 2 ', infoo());
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

