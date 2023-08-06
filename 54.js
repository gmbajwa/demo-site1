
console.log(' ');
console.log('54.js iw working........ ');
console.log(' ');
console.log('Callback Funtions: 2306221010');
console.log(' ');
console.log(`

1- we can pass as an arguments any type of value to function parameters.

2- String, Number, BigNumber, Boolean, Null, Undefined, array, object, Function.

3- Once we pass as an argument a Function to a function paramenters, this is called callback function. ie passed function as an arguments and function received as an parameter this function received function is call call back function.

4- we can named it any name but by conventions we named it like callback

`);
console.log(' ');
console.log('Function Receiving String ');
console.log(' ');

const greeting = str => console.log('str: ', str);

greeting('this is string parameter:');

console.log(' ');
console.log('Function Receiving Number ');
console.log(' ');

const greeting2 = num => console.log('num: ', num);

greeting2(4);

console.log(' ');
console.log('Functin Receiving BigNumger: ');
console.log(' ');

const greeting3 = bnum => console.log('bnum: ', bnum);

greeting3(43n);

console.log(' ');
console.log('Function Receiving Boolean true ');
console.log(' ');

const greeting4 = boot => console.log('boot: ', boot);

greeting4(true);

console.log(' ');
console.log('Function Receiving boolean false ');

const greeting5 = boof => console.log('boof:', boof);

console.log(' ');
greeting5(false);
console.log(' ');
console.log('Functino Receiving Null ');
console.log(' ');

const greeting6 = pnull => console.log('pnull:', pnull);

greeting6(null);

console.log(' ');
console.log('Functin Receiving Undefined ');
console.log(' ');

const greeting7 = und => console.log('und:' , und);

greeting7(undefined);
console.log(' ');
console.log('Function Receinving array ');
console.log(' ');

const greeting8 = arr => console.log('arr:', arr);

greeting8(['this', 'is', 'array']);

console.log(' ');

console.log('Function Receinving Object ');

const greeting9 = obj => obj;

console.log(' ');

let mouse = {id: 2, name: 'leaser mouse', pricie: 'Rs.1550/-', size: '4.3', weight: '250g'};

let result = greeting9(mouse);
console.log(result);
console.log(' ');
console.log('Function Receiving Function as a Parameter ');
console.log(' ');

const ofun = () => {
	console.log('Other Functions:');
}

const greeting10 = pfun => {
	console.log('Within function:');
	console.log('type of pfun:', typeof pfun);
	console.log('Calling ofun within pfun:');

	pfun();
}

greeting10(ofun);

console.log(' ');
console.log('There is convention used for call back function, named callback function which received by function as parameter: ');
console.log(' ');

const callbackfunc = () => 5;

const greeting11 = callback => {
	console.log('This is main function:');
	console.log(' ');

	console.log('value from callback from main function:');
	console.log(' ');
	console.log(callback());
}

console.log(' ');

greeting11(callbackfunc);

console.log(' ');
console.log(' ');
console.log(' ');
