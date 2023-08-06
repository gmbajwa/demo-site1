console.log(' ');
console.log('65.js is woeking fine..................... ');
console.log(' ');
console.log('Heigher Order Functions: splice method ');
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
console.log('Prudicts array: ', products);
console.log(' ');
console.log('Delete inside array: ');
console.log(' ');
const di = products.splice(3, 2);
console.log(' after splicing products: ', products);
console.log(' ');
console.log('deleted item:', di);
console.log(' ');
console.log('insertion in array using splice: ');
console.log(' ');
products.splice(1, 0, 'inserted item1', 'inserted item2' );
console.log('insertion using splice and new array:', products);
console.log(' ');
console.log('insertion numbers using splice: ');
products.splice(4, 0, {id: 1, name: 'name1', price: 4234})
console.log(' ');
console.log('Object insertion using splice: ', products);
console.log(' ');
console.log('array insertion using splice ');
products.splice(5, 0, [2, 3, 4, 5, 6]);
console.log(' ');
console.log('after array inseertion:', products);
console.log(' ');
console.log('Insertion and deletion same time: ');
console.log(' ');
const dii = products.splice(3, 4, 'n', 'n2', {s: 2, d: 3}, [44, 33, 22, 11])
console.log('after deletion and insertion:', dii);
console.log(' ');
console.log('Now fineal Products: ', products);
