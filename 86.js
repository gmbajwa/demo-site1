console.log(' ', );

console.log('86.js is working fine.............. ', );

console.log(' ', );

console.log('Creating Object using CLASS keyword: ', );

console.log(' ', );

class CreateUser{
	constructor( id, fName, userName, email, age ){
	
		this.id = id;
		this.fName = fName;
		this.userName = userName;
		this.email = email;
		this.age = age;
	}

	about(){
	
		return `User ID: ${this.id} and First Name: ${this.fName}.`;
	}

	info(){
	
		return `User Name: ${this.userName} and Email: ${this.email}.`;
	}

	is18(){
	
		return `User Age: ${this.age}.`;
	}

	sing(){
	
		return `la la la la la`;
	}
}

const user1 = new CreateUser( 1, 'fname1', 'username1', 'email1', 34 );

console.log( user1 );

console.log(' ', user1.about() );

console.log(' ', );

console.log(' ', user1.info() );

console.log(' ', );

console.log(' ', user1.is18() );

console.log(' ', );

console.log(' ', user1.sing() );

console.log(' ', );

const user2 = new CreateUser( 2, 'fname2', 'username2', 'email2', 22 );

console.log(' ', );

console.log( user2 );

console.log(' ', );

console.log(' ', user2.about() );

console.log(' ', );

console.log(' ', user2.info() );

console.log(' ', );

console.log(' ', user2.is18() );

console.log(' ', );

console.log(' ', user2.sing() );

console.log(' ', );

console.log( 'user2 kyes:', typeof user2 );

console.log(' ', );

for ( let key in user2 ) {


	if ( !user2.hasOwnProperty( key ) ) {
	
		console.log( key );
	}else {
	
		console.log( 'no any prototype property' );
	}
}

console.log(' ', );

console.log(' ', Object.getPrototypeOf(user2) );


