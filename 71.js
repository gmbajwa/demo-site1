console.log(' ');
console.log('71.js is working........ ');
console.log(' ');
console.log('Methods ');
console.log(`
what is method?
function inside object is called method.
`);

function info(){

	console.log(`
			user id: ${this.id}
			user fname: ${this.fname}
			user username: ${this.username}
			user email: ${this.email}

		`);
}
		


const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	about: info
}

const userObj2 = {
	id: 1, 
	fname: 'Mustafa',  
	username: 'gmBAJWA', 
	email: 'tekhbos@gmail.com',
	about: info
}
const userObj3 = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	about: info
}
console.log(' ');
console.log('Defining function outside from object ');
console.log(' ');
userObj.about();
userObj2.about();
userObj3.about();
console.log(' ');
console.log(' ');
console.log(' ');

