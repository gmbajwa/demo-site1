console.log(' ', );

console.log('84.js is working fine............. ', );

console.log(' ', );

console.log('Printing keys of created object using constructor function ', );

console.log(' ', );

function CreateUser(id, fName, userName, email, age){

	this.id = id;
	this.fName = fName;
	this.userName = userName;
	this.email = email;
	this.age = age;

}

CreateUser.prototype.about = function(){

	return `User ID is: ${this.id} and First Name is: ${this.fName}.`;

};

CreateUser.prototype.info = function(){

	return `User Name is: ${this.userName} and Email is: ${this.email}.`;

};

CreateUser.prototype.is18 = function(){

	return `User Age is: ${this.age}.`;

};

CreateUser.prototype.sing = function(){

	return `la la la la la la la la.`;

};

const user1 = new CreateUser(1, 'fname1', 'username1', 'email1', 23);

console.log(user1);

console.log(' ', );

console.log(' ', user1.about());

console.log(' ', );

console.log(' ', user1.info());

console.log(' ', );

console.log(' ', user1.is18());

console.log(' ', );

console.log(' ', user1.sing());

console.log(' ', );

const user2 = new CreateUser(2, 'fname2', 'username2', 'email2', 89);

console.log(user2);

console.log(' ', user2.about() );

console.log(' ', );

console.log(' ', user2.info());

console.log(' ', );

console.log(' ', user2.is18() );

console.log(' ', );

console.log(' ', user2.sing() );

console.log(' ', );

console.log('user1 keys: ', );

console.log(' ', );

for( let key in user1 ) {

	if( !user1.hasOwnProperty( key ) ) {

		console.log( key );

	}
}

console.log(' ', );

console.log( 'user2 keys: ', typeof user2 );

console.log(' ', );

for( let key in user2 ) {

	if( user2.hasOwnProperty( key ) ){

		console.log( key );

	}
}

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

