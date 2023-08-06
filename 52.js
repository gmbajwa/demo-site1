
console.log('52.js is working ....... ');
console.log(' ');
console.log('Functions Rest Parameters: ');
console.log(' ');

const numbers = (a, b, c) => {
	console.log(`a is ${a}`);
	console.log(`b is ${b}`);
	console.log(`c is ${c}`);
}
// Call with 3 arguments
numbers(4, 2, 1);
// 
// Call with more than 3 arguments

console.log('Call with more than 3 arguments:');

numbers(8, 5, 3, 1, 9, 0);

console.log(' ');
const numbers2 = (a, b, ...c) => {
	console.log(`a is ${a}`);
	console.log(`b is ${b}`);
	console.log('c is: ', c);
}
// Call with 3 arguments
numbers2(4, 2, 1);
// 
// Call with more than 3 arguments

console.log('Call with more than 3 arguments:');

numbers2(8, 5, 3, 1, 9, 0);
console.log(' ');
console.log('Findind Sum of any number of arguments: ');
console.log(' ');

const numbers3 = (...numbers) => {
	let total = 0;
	for( let number of numbers ){
		total = number + total;
	}
	return total;
}

// Calling nubers3 function with only two numbers
let sum = numbers3(4, 3);


console.log(' ');
console.log(' sum :', sum);
console.log(' ');
let sum2 = numbers3(3, 2, 5, 6, 6, 8);
console.log('sum2: ', sum2);
console.log(' ');
