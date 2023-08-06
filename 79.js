console.log(' ');
console.log('79.js is working....................... ');
console.log(' ');
console.log('How to set address of one object to another object: ');
console.log(' ');
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com'
}

const user = Object.create(userObj);

console.log(' ');
console.log('userObj ', userObj);
console.log(' ');
console.log('user empty :  ', user);
console.log(' ');
user.id = 2;
console.log('user id after empty user:  ', user);
console.log(' ');
console.log(' ');
const empty = {};
console.log(' ');
console.log(' ', empty);
console.log(' ');
console.log('Proto of user:', user.__proto__);
console.log(' ');
console.log(' ', user.fname);
console.log(' ');
console.log('age in userObj: ', userObj.age);
console.log(' ');

userObj.__proto__ = {age:32, color:'red'};
console.log('age in userObj: ', userObj.age);
console.log(' ');
console.log('Proto of user userObj: ', userObj.__proto__);
console.log(' ');
console.log('color of user: ', user.color);
console.log(' ');
console.log('User object after tow level inheritance', user);
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

