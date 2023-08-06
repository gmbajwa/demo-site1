
console.log(' ');
console.log('55.js is working............. ');
console.log(' ');
console.log('Functions Returning Functinos:: Heigher Order Functions: 2306221540 ');

const greeting = () => {
	
	console.log('This is greeting functions work!!! ');

	const greeting2 = () => "This is greeting 2 work!!!";

	return greeting2;
}

console.log(' ');

let result = greeting();

console.log(' ');
console.log('What is inside result: ', result);
console.log(' ');
console.log('Calling result function and checks its out put: ');
console.log(' ');

let output = result();

console.log('Resut function output: ', output);
console.log(' ');
console.log('Other way to write returning function ');
console.log(' ');

const otherGreeting = () => {
	
	console.log('OtherGreeting fucntions work!!!');

	return otherGreeting2 = () => "This is Other greeting 2 work!!!";
}

console.log('Calling OtherGreeting Function: ');


console.log(' ');

otherGreeting();

console.log(' ');
console.log('otherGreeting function returning value: ');

console.log(' ');

let otherResult = otherGreeting();

console.log(' ');
console.log('What is inside otherResult veriable: ', otherResult);

console.log('Oh! otherReult veriable contain function we can call like following: ');
console.log(' ');

otherResult();

console.log('Oh! otheResult function nothing out on console: ');
console.log(' ');

console.log('So we store output of otherResult funciton in memory and out put to console: ');
console.log(' ');

let otherOutPut = otherResult();
console.log('otherOutput veriable outputed value: ', otherOutPut);
console.log(' ');
console.log('A Function can return any value of Like ');
console.log(`

1- A Function can return a String,

2- A Function can return a Number,

3- A Funcion can return a BigInt,

4- A Function can return a Boolean,

5- A Function can return a Undefined,

6- A Function can return a Null,

7- A Functin can return a an Array,

8- A Functoin can return an Object,

9- A Function can return a Function as well.

`);
console.log(' ');
console.log('A Function Returning a String: ');
console.log(' ');

const functinReturningString = () => {
	console.log('Main Function functionReturningString work!!!');

	return 'retrunging string value from main';
}

console.log(' ');
const res = functinReturningString();

console.log('What is inside of res: ', res);
console.log(' ');
console.log('A Function Returning Number: ');
console.log(' ');

const renum = () => {
	console.log('Main Function renum work!!!');

	return 321;
}

console.log('main function calling:');
console.log(' ');


renum();
console.log(' ');

console.log('returning value from main function:');

console.log(' ');

let retvalue = renum();
console.log(' ');

console.log('retruned value from numberfunction:', retvalue);

console.log(' ');

console.log('A Function Returning BigInt from a main function:');

console.log(' ')

const retBigInt = () => {
	
	console.log(' ');

	console.log('Mian retBigInt Function work!!!');

	console.log(' ');

	return 43n;

}

console.log('calling retBigInt:');

retBigInt();

let whatisRet = retBigInt();

console.log('Checking Return value from Main retBigInt:', whatisRet);

console.log(' ');

console.log('A Function Returning Boolean True:');

console.log(' ');

const retBoolT = () => {

	console.log(' ');

	console.log('Main retBoolT Function work!!!');

	console.log(' ');

	return subRetBoolT = () => true;

}

console.log('Calling retBoolT Function: ');

retBoolT();

console.log('What retBoolT Function Return??? ');

let resultRetBoolT = retBoolT();

console.log('What type of value retBoolT Function returning: ', typeof resultRetBoolT);

console.log(' ');

console.log('retBooT Function returning a Function and we can call this Function: ');

console.log(' ');

resultRetBoolT();

console.log('result of resultRetBoolT function is:');

console.log(' ');

let otResultRetBoolT = resultRetBoolT();

console.log('Type of otResultRetBooT value: ', typeof otResultRetBoolT);

console.log(' ');

console.log('What is return value: ', otResultRetBoolT);

console.log(' ');

console.log('Function Returning Function with Boolean False: ');

console.log(' ');

const retBoolF = () =>{

	console.log(' ');

	console.log('retBoolF main Function work!!!');

	console.log(' ');

	return subRetBoolF = () => false;

}

console.log(' ');

console.log('Calling Main retBoolF Function: ');

console.log(' ');

retBoolF();

console.log('Checking returning what retBoolF function??? ');

console.log(' ');

let resultofRetBoolF = retBoolF();

console.log('Checking typeof resultofRetBoolF verialble ', typeof resultofRetBoolF);

console.log(' ');

console.log('retBoolF functin returning a function so we can call like following: ');

resultofRetBoolF();

console.log(' ');

let otResultofRetBoolF = resultofRetBoolF();

console.log('checking type of otResultofRetBoolF: ', typeof otResultofRetBoolF);

console.log(' ');

console.log('Value of otResultofRetBoolF ', otResultofRetBoolF);

console.log(' ');

console.log('Function returning a function with arra data type ');

console.log(' ');

const retArr = () => {

	console.log(' ');

	console.log('Main Function retArr work!!!');

	return subRetArr = () => ['This', 'is', 'an', 'array', 1, 3, 5];

}


console.log('Calling main function retArr: ');

retArr();

console.log('Checking return value of retArr Function: ');

console.log(' ');

let resultRetArr = retArr();

console.log(' ');

console.log('Checking whats return by retArr Function: ', typeof resultRetArr);

console.log(' ');

console.log('Its returning a function so we can call it like fillowing: ');

console.log(' ');

resultRetArr();

console.log(' ');

console.log('after fucntion calling nothing out put to console so check weather its returning some thind ');

console.log(' ');

let otResultRetArr = resultRetArr();

console.log(' ');

console.log('checking what is otResultRetArr: ', typeof otResultRetArr);

console.log(' ');

console.log('as array always have type of Object ');

console.log(' ');

console.log('we can check weather this object is an array using Array.isArray method: ');

console.log(' ');

if( Array.isArray(otResultRetArr) ) {

	console.log(' ')

	console.log('otResultRetArr is an array');
} else {

	console.log(' ');

	console.log('otResultRetArr is not an array');
}

console.log(' ');

console.log('as we get confirm about it, so we can loop through the array: ');

console.log(' ');

for( let item of otResultRetArr ){

	console.log('Arrays Values: ', item);

	console.log(' ');

}

console.log(' ');

console.log('Function Returning Function with an object of Keyboard: ');

console.log(' ');

const retObj = () => {

	console.log(' ');

	console.log('Main Function retObj work!!!');

	return subRetObj = () => {
		return	{
	
			name: 'a4tech',
			price: 2200,
			type: 'wireless'

		};
	};

}

retObj();

console.log(' ');

console.log('Returning value from retObj Function: ');

let resRetObj = retObj();

console.log(' ');

console.log('What retObje Function is returning, check type ');

console.log(' ');

console.log('type of return value from retObj() function: ', typeof resRetObj);

console.log(' ');

console.log('Oh this is function so we can call this return function ');

resRetObj();

console.log();

console.log('after calling resRetObj function nothing is on consle so check return value ');

console.log(' ');

let otResRetObj = resRetObj();

console.log('What resRetObj is returning checking its type: ', typeof otResRetObj);

console.log(' ');

console.log('As this is object so so we can find all keys, all values so lets start');

console.log(' ');

console.log('All Values of the object key value pairs');

console.log(' ');

for( let index in otResRetObj ) {

	console.log(otResRetObj[index]);
}


console.log(' ');

console.log('All Keys array of the boject');

console.log(' ');

const objKeys = Object.keys(otResRetObj);

console.log(objKeys);

console.log(' ');

console.log('Thanks All About Functions Returns any type of Value:');

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');














