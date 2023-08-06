
console.log(' ');

console.log('98.js is workingin fine ..................');

console.log(' ');

console.log('closures:');

console.log(' ');

console.log('before closures we\'hve to know function can return function');

console.log(' ');

function a(){


	function b(){

		return 'from function b';
	}

	return b;
}

const c = a();

console.log('c: ', c);

console.log(' ', );

console.log('c(): ', c() );

function printFullName(firstName, lastName){

	function printName(){

		return `${firstName}, ${lastName}, ${arguments}`;
	}

	return printName;

}

const result = printFullName('ghulam', 'mustafa');

console.log(' ', );

console.log('result: ', result);

console.log(' ', );

console.log('result(): ', result() );

console.log(' ', );

console.log(' ', );


