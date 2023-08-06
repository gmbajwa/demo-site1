console.log(' ');
console.log('64.js is working................... ');
console.log(' ');
console.log('Heigher Order Functions: some and fill  method');
console.log(' ');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('is any number is even: ', numbers.some(v => v === 0));
console.log(' ');
const products = [
	{id: 1, name: 'p1', price: 12000},
	{id: 2, name: 'p2', price: 230000},
	{id: 3, name: 'p3', price: 8000},
	{id: 4, name: 'p4', price: 81000},
	{id: 5, name: 'p5', price: 90000},
	{id: 6, name: 'p6', price: 53000},
	{id: 7, name: 'p7', price: 23000}
];
console.log('All Products: ', products);
console.log(' ');
console.log('is any product\'s price is exceded more than 1 lakh: ', products.some(v => v.price > 100000));
console.log(' ');
console.log('Heigher order functionis fill ');
console.log(' ');
const newArray = new Array(10).fill(-1);
console.log('newArray ', newArray);
console.log(' ');
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(' ');
console.log('myArray: ', myArray);
console.log(' ');
console.log('fill mynew Array from 3 to 6 wiht 101 number ', myArray.fill(101,3,6));
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
