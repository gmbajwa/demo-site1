console.log(' ');
console.log('70.js is working........... ');
console.log(' ');
console.log('Optional Chaining:: Used in nested Objects');
console.log(' ');
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com'
}
console.log('Id: ', userObj?.id);
console.log(' ');
console.log('fname: ', userObj.fname);
console.log(' ');
console.log('user name: ', userObj.username);
console.log(' ');
console.log('email: ', userObj.email);
console.log(' ');
console.log('Adding Address Property in userObj ');
userObj.address= {housenumber:1234, streetnumber:4321};
console.log(' ');
console.log('new user Object: ', userObj);
console.log(' ');
console.log('user Address: ', userObj?.address);
console.log('user Address: ', userObj?.address?.housenumber);
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
