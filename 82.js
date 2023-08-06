console.log(' ');
console.log('82.js is working fing......... ');
console.log(' ');
console.log('define function, use its prototype object and call it with new keyword ');
console.log(' ');
function createUser(id, fName, userName, email, age){


	this.id = id;
	this.fName = fName;
	this.userName = fName;
	this.email = email;
	this.age = age;



}
createUser.prototype.about = function(){
	return `user id is ${this.id} and first name is ${this.fName}.`;
};

const user1 = new createUser(1, 'fname1', 'username1', 'email1', 43);


console.log(' ');

console.log(user1);

console.log(user1.about());


const user2 = new createUser(2, 'fname2', 'username2', 'email2', 23);

console.log(user2);

console.log(user2.about());
