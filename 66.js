console.log(' ');
console.log('Iterables and array like objects ');
console.log(`
Iterables:
on which we can use for of loop. 

Like : Strings and Arrays.
`);
console.log(' ');
console.log('Strings Iterables: ');
console.log(' ');
let myName = 'Ghulam Mustafa Bajwa Ibraheemi';
for( let eachChar of myName ) {
	console.log(eachChar);
}
console.log('Iterate through users array: ');

const users = [
	{id: 1, fname: 'kaleem',  username: 'username1', email: 'email1@g.com'},
	{id: 2, fname: 'saleem',  username: 'username2', email: 'email2@g.com'},
	{id: 3, fname: 'naleem',  username: 'username3', email: 'email3@g.com'},
	{id: 4, fname: 'maleem',  username: 'username4', email: 'email4@g.com'},
	{id: 5, fname: 'jaleem',  username: 'username5', email: 'email5@g.com'},
	{id: 6, fname: 'taleem',  username: 'username6', email: 'email6@g.com'}
];

for ( let user of users ) {
	console.log('user id: ', user.id);
	console.log('user first name: ', user.fname);
	console.log('user user name: ', user.username);
	console.log('user email: ', user.email);
}

console.log(' ');
console.log('Array Like Objects ');
console.log(`
any object have length property
and
and can access through index
are called Array Like Objects
`);
console.log(' ');
console.log('Strings are array like Objects: ');
console.log(' ');
console.log('Prove: ');
console.log(' ');
console.log('1- have length property ');
console.log(' ');
console.log('Length of myName String: ', myName.length);
console.log(' ');
console.log('2- accessing through incex ');
console.log(' ');
console.log('find character at index 4: ', myName[4]);
console.log(' ');
console.log('So Proved: by both requirements: length and access through incex ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
