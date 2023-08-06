
console.log('50.js is working..... ');
console.log(' ');
console.log('block scope vs functions scope ');
console.log(' ');

{
	let blockScope = 'this is curly block scope';
	console.log('Within curly block scope:', blockScope);
}

// Can't access blockScope as define using let keyword
//console.log('Function Scope or Global Scope or Main Function Scope:', blockScope);


console.log(' ');
console.log('Block Scop Using Const keyword ');
{
	const blockScopeUsingConst = 'this is curly block scope';
	console.log(' ');
	console.log('Within curly block scope using const:', blockScopeUsingConst);
}

// Can't access blockScopeUsingConst 
//console.log('Function Scope or Global Scope or Main Function Scope:', blockScopeUsingConst);
console.log(' ');
console.log('Block Scope and Function Scope using var keyword: ');
console.log(' ');
{
	var blockScopeUsingVar = 'This is within curly block scope using var keyword';
	console.log('Block Scope Using Var:', blockScopeUsingVar);
}
//Accessing veriable blockScopeUsingVar in Functions or Global Scope:
//

console.log(' ');
console.log('blockScopeUsingVar in Functiion  or Global Scope: ', blockScopeUsingVar);
console.log(' ');



function globalScopeFunction() {

	var myName = "within function";
	var person = {name: 'Mustafa', age: 34, gendar: 'Male'}
	const personB = {name: 'Ibhraheemi', age: 35, gendar: 'Male'}
	let personC = {name: 'Ghulam', age: 36, gendar: 'Male'}

	const blockScope = () => {
		
		console.log('My Name : Sub level:', myName);
		console.log(' ');
		console.log('Sub Level, within blockScope, persong object using var: ', person);
		console.log(' ');
		
		console.log(' ');
                console.log('Sub Level, within blockScope, personB object using const: ', personB);
                console.log(' ');

		console.log(' ');
		console.log('Sub Level, within blockScope, persongC object using let: ', personC);
		console.log(' ');


	}
	blockScope();
}
var myName = 'within global scope/main function scope';
console.log('myName: ', myName);
globalScopeFunction();

