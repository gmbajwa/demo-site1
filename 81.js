console.log(' ');
console.log('81.js is working............ ');
console.log(' ');
console.log('Learning Prototype but not Proto. ');

function createUser(id, fName, userName, email, age){

	const user = Object.create(createUser.prototype);
		
	user.id = id;
	user.fName = fName;
	user.userName = userName;
	user.email = email;
	user.age = age;


	return user;
}

createUser.prototype.about = function(){
	return `User id is ${this.id} and user first name is ${this.fName}.`
};
createUser.prototype.info = function(){
	return `user name is ${this.userName} and email is ${this.email}.`
};
createUser.prototype.is18 = function(){
	return `User age is ${this.age}.`
};

createUser.prototype.sing = function(){
	return `lalalala lala `
};
console.log(' ');
console.log('creating object');
const user1 = createUser(1, 'fname1', 'username1', 'email1', 32);
console.log(' ');
console.log('user1: ', user1);
console.log(' ');
console.log('about user 1:', user1.about());
console.log(' ');
console.log('user 1 info: ', user1.info());
console.log(' ');
console.log('user 1 is18:  ', user1.is18());
console.log(' ');
console.log(' ', user1.sing());
console.log(' ');
console.log(' ');
