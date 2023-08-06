console.log(' ');
console.log('63.js is working fine............. ');
console.log(' ');
console.log('Heigher Order Functions: every method');
console.log(' ');
const users = [
	{id: 1, fname: 'kaleem',  username: 'username1', email: 'email1@g.com'},
	{id: 2, fname: 'saleem',  username: 'username2', email: 'email2@g.com'},
	{id: 3, fname: 'naleem',  username: 'username3', email: 'email3@g.com'},
	{id: 4, fname: 'maleem',  username: 'username4', email: 'email4@g.com'},
	{id: 5, fname: 'jaleem',  username: 'username5', email: 'email5@g.com'},
	{id: 6, fname: 'taleem',  username: 'username6', email: 'email6@g.com'}
];
console.log('Weather every method has username:', users.every(v => v.username === 'username1'));
console.log(' ');
const allEvens = [2, 4, 6, 8, 10, 12, 14, 16];
console.log('array allEvens has every element is even: ', allEvens.every( v => v%2 === 0));
console.log(' ');
const numbers  = [2, 3, 6, 8, 10, 12, 14, 16];
console.log('array allEvens has every element is even: ', numbers.every( v => v%2 === 0));
console.log(' ');
console.log('Check price of every product should greater than 30000 ');
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
console.log('Products ', products);
console.log(' ');
console.log('Is every product\'s proce is greater than 1 lakh: ', products.every(v => v.price > 5000));
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
console.log(' ');
console.log(' ');
console.log(' ');
