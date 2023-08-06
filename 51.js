
console.log(' ');
console.log('51.js is working..... ');
console.log(' ');
console.log('Default Parameters introduces in ES2015 ');

console.log(' ');
function addTwo(a, b){

	return a+b;

}

let ans = addTwo(3,5);
console.log('ans:', ans);
console.log(' ');


let ans2 = addTwo(3);
console.log('ans2: ', ans2);

console.log(' ');
console.log('How to hanlde when less nunbers of arguments are inputed before ES2015: ');
function addTwo2(a, b){
	if(typeof b === 'undefined'){
		b = 0;
	}
	return a + b;
}
console.log(' ');
let ans3 = addTwo2(4, 6);
console.log(' ');
console.log('ans3:', ans3);
console.log(' ');
let ans4 = addTwo2(8);
console.log('ans4: ', ans4);



console.log(' ');
console.log('In ES2015, When less number of arguments are provided: ');
console.log(' ');

const sum = (a, b) => a + b;

let ans5 = sum(8, 9);

console.log('ans5: ', ans5);
console.log(' ');
const sum2 = (a, b=0) => a + b;
console.log('Single arguments is inputed in function invocation ');
let ans6 = sum2(14);
console.log(' ');

console.log('ans5: ', ans6);
console.log(' ');
