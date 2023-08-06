console.log(' ');
console.log('83.js is working fine........... ');
console.log(' ');
console.log('calling function with new keyword should have first letter camel convention ');
console.log(' ');

function CreateUser(id, fName, userName, email, age){

	this.id = id;
	this.fName = fName;
	this.userName = userName;
	this.email = email;
	this.age = age;

}

CreateUser.prototype.about = function(){

	return `user id is ${this.id} and first name is ${this.fName}.`;
};

CreateUser.prototype.info = function(){

	return `User name is ${this.userName} and email is ${this.email}.`;

};

CreateUser.prototype.is18 = function(){

	return `User age is ${this.age}.`;

};

CreateUser.prototype.sing = function(){

	return `la la la la la la la.`;

};

const user1 = new CreateUser(1, 'fname1', 'username1', 'email1', 23);

console.log(user1);
console.log(' ');
console.log(' ', user1.about());
console.log(' ');
console.log(' ', user1.info());
console.log(' ');
console.log(' ', user1.is18());
console.log(' ');
console.log(' ', user1.sing());
console.log(' ');

const user2 = new CreateUser(2, 'fanem2', 'username2', 'email2', 12);

console.log(' ');
console.log(user2);
console.log(' ');
console.log(' ', user2.about());
console.log(' ');
console.log(' ', user2.info());
console.log(' ');
console.log(' ', user2.is18());
console.log(' ');
console.log(' ', user2.sing());
console.log(' ');

const user3 = new CreateUser(3, 'fname', 'username3', 'email3', 32);

console.log(user3);

console.log(' ', user3.about());

console.log(' ');

console.log(' ', user3.info());

console.log(' ');

console.log(' ', user3.is18());

console.log(' ');

console.log(' ', user3.sing());

console.log(' ');

console.log(' ', );

console.log(' ');

