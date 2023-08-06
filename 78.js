console.log(' ');
console.log('78.js is working............ ');
console.log(' ');
console.log('Object Orientation Rule 3: ');
console.log(' ');
console.log('Make a seprate single copy for each object. ');
console.log(' ');
console.log('and Each Object will reference that single copy of method. ');
console.log(' ');
const objectMethods = {
	about(){return `User Id is ${this.id} and user first name is ${this.fName}.`},
	info(){return `User's username is ${this.userName} and user email is ${this.email}.`},
	is18(){return `User age is ${this.age}.`},
	newM(){return `this is new method added manulaly`}
};
function createObject(id, fName, userName, age, email){

	const user = Object.create(objectMethods);

	user.id = id;
	user.fName = fName;
	user.userName = userName;
	user.age = age;
	user.email = email;

	return user;

}
const user1 = createObject(1, 'fname1', 'username1', 1, 'email1');
console.log(' ', user1);
console.log(' ');
console.log('Calling Object Methods: ');
console.log(' ');
console.log(' ', user1.about());
console.log(' ');
console.log(' ', user1.info());
console.log(' ');
console.log(' ', user1.is18());
console.log(' ');
console.log(' ', user1.newM());
console.log(' ');
const user2 = createObject(2, 'fname2', 'username2', 2, 'email2');
console.log(' ', user2);
console.log(' ');
console.log('Calling Object Methods: ');
console.log(' ');
console.log(' ', user2.about());
console.log(' ');
console.log(' ', user2.info());
console.log(' ');
console.log(' ', user2.is18());
console.log(' ');
const user3 = createObject(3, 'fname3', 'username3', 3, 'email3');
console.log(' ', user3);
console.log(' ');
console.log('Calling Object Methods: ');
console.log(' ');
console.log(' ', user3.about());
console.log(' ');
console.log(' ', user3.info());
console.log(' ');
console.log(' ', user3.is18());
const user4 = createObject(4, 'fname4', 'username4', 4, 'email4');
console.log(' ', user4);
console.log(' ');
console.log('Calling Object Methods: ');
console.log(' ');
console.log(' ', user4.about());
console.log(' ');
console.log(' ', user4.info());
console.log(' ');
console.log(' ', user4.is18());
const user5 = createObject(5, 'fname5', 'username5', 5, 'email5');
console.log(' ', user5);
console.log(' ');
console.log('Calling Object Methods: ');
console.log(' ');
console.log(' ', user5.about());
console.log(' ');
console.log(' ', user5.info());
console.log(' ');
console.log(' ', user5.is18());
console.log(' ');
console.log(' ', user5.newM());
console.log(' ');
console.log(' ');
