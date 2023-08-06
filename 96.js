console.log(' ');

console.log('96.js is workingin fine ..................');

console.log(' ');

let foo = 'foo';

console.log('foo:', foo);

console.log(' ');

function getFullName(firstName, lastName){

	console.log(arguments);
	
	console.log(' ');

	let myVar =  'myVar inside getFullName()';

	console.log(myVar);

	console.log(' ');

	const fullName = firstName + ' ' + lastName;

	return fullName;

}

const personName = getFullName('ghulam', 'mustafa');

console.log(personName);

