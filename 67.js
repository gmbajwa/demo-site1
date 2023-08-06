console.log(' ');
console.log('67.js is working fine................ ');
console.log(' ');
console.log('Iterables: String, Array, Now we study Sets ');
console.log(' ');
console.log(`Why we should use Set Iterable: 
1- to store unique values like user id's

2- remove duplicates from arrays

`);
console.log(`Iterables: Sets Methods
1- add();
2- has();
`);
console.log(`
Iterables:

1- String -- can use for of loop as well as has length and can access through index

2- Arryas  -- for of, length, access through index
3- Symbol
4- Sets    -- for of, no lengtth, no access through index
`);
console.log(' ');
const mySet = new Set([1,2,4,5]);
console.log('My first set in js: ', mySet);
console.log(' ');
console.log('Weather we can use for of loop on set? ');
for( let element of mySet ) {
	console.log('Element of set:', element);
}
console.log(' ');
console.log('Wao for of loop is working on set ');
console.log(' ');
console.log('So Proved that: mySet is an Iterable');
console.log(' ');
console.log('Weather set is an array like Object: ');
console.log(' ');
console.log('Length of mySet: ', mySet.length);
console.log(' ');
console.log('as mySet has no length property so returning undefined, so mySet is not array like object ');
console.log(' ');
console.log('Weather mySet element can be access through index ');
console.log(' ');
console.log('Element of mySet at index 2: ', mySet[2]);
console.log(' ');
console.log('So proved mySet is an iterable but not array like object ');
console.log(' ');
console.log('String iterable: ');
console.log(' ');
const myIterable2 = new Set('Ghulam Mustafa Bajwa Ibraheemi');
console.log(' ');
console.log('can\'t access length property: ', myIterable2.length);
console.log(' ');
console.log('can\'t access any element using incex: ', myIterable2[3]);
console.log(' ');
console.log('can only use for of loop: ');
for ( let ele of myIterable2 ) {
	console.log(ele);
}
console.log(' ');
console.log('How we can know length of iterable: ');
let counter = 0;
for ( let ele of myIterable2 ) {
	counter++;
}
console.log('myIterable2 length: ', counter);
console.log(' ');
console.log('myIterable2 content: ', myIterable2);
console.log(' ');
console.log('Most of the time we create empty Set: ');
const myIterable3 = new Set();
myIterable3.add(1);
myIterable3.add(2);
myIterable3.add(2);
myIterable3.add(4);
console.log('Third Iterable: ', myIterable3);
console.log(' ');
console.log('Adding Different Data Types in sets Iterable: ');
console.log(' ');
const users = [
	{id: 1, fname: 'kaleem',  username: 'username1', email: 'email1@g.com'},
	{id: 2, fname: 'saleem',  username: 'username2', email: 'email2@g.com'},
	{id: 3, fname: 'naleem',  username: 'username3', email: 'email3@g.com'},
	{id: 4, fname: 'maleem',  username: 'username4', email: 'email4@g.com'},
	{id: 5, fname: 'jaleem',  username: 'username5', email: 'email5@g.com'},
	{id: 6, fname: 'taleem',  username: 'username6', email: 'email6@g.com'}
];
myIterable3.add(users);
myIterable3.add(12);
myIterable3.add(13);
const products = [
	{id: 1, name: 'p1', price: 12000},
	{id: 2, name: 'p2', price: 230000},
	{id: 3, name: 'p3', price: 8000},
	{id: 4, name: 'p4', price: 81000},
	{id: 5, name: 'p5', price: 90000},
	{id: 6, name: 'p6', price: 53000},
	{id: 7, name: 'p7', price: 23000}
];
myIterable3.add(products);
myIterable3.add(13);
const items = ['item1', 'item2', 'item3', 'item4'];
myIterable3.add(14);
myIterable3.add(items);
myIterable3.add(['item1', 'item2', 'item3', 'item4']);
console.log('different data in iterable3:', myIterable3);
console.log(' ');
console.log('check weather an element present in set using has() method ');
console.log(' ');
console.log('myIterable3 has 4 element ', myIterable3.has(4));
console.log(' ');
console.log('we\'ve an array of duplicate elements: ');
const duplicated = [3,3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 9];
console.log(' ');
console.log('Original array: ', duplicated);
console.log(' ');
console.log('Removing duplicate using Iterables Set ');
console.log(' ');
const iterable4 = new Set(duplicated);
console.log('removed duplicates: ', iterable4);
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
