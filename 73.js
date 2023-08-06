console.log(' ');
console.log('73.js is working................ ');
console.log(' ');
console.log('call, apply and bind method ');
console.log(' ');
function normal(){return 'from normal'};
const normal2 = () => 'from normal 2';
console.log(normal());
console.log(' ');
console.log(normal.call());
console.log(' ');
console.log(normal2());
console.log(' ');
console.log(normal2.call());
console.log(' ');
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	about: function(){return this.id}
}
const userObj2 = {
	id: 2, 
	fname: 'Saleem',  
	username: 'username2', 
	email: 'email1@g.com2'
}
console.log('after function call noticing method call ');
console.log(' ');
console.log('method default call ');
console.log(' ');
console.log(' ', userObj.about());
console.log(' ');
console.log('default method call using call function: ');
console.log(' ');
console.log(' ',userObj.about());
console.log(' ');
console.log('userObj2 borrowing mehtod about of userObj: ');
console.log(' ');
console.log(' ', userObj.about.call(userObj2));
console.log(' ');
console.log('Don\'t borrow method, make it Public for any object to use:');
console.log(' ');
function about(){return{id:this.id, 'first name': this.fname, 'user name': this.username, 'user email':this.email}};
//function about(){return this};
const info = () => 'rome public info';
const userObj3 = {
	id: 3, 
	fname: 'Faleem',  
	username: 'username3', 
	email: 'email1@g.com3'
}
const userObj4 = {
	id: 4, 
	fname: 'Jaleem',  
	username: 'username4', 
	email: 'email1@g.com4'
}
console.log(' ');
console.log(' ',about.call(userObj3));
console.log(' ');
console.log(' ',about.call(userObj4));
console.log(' ');
console.log(' ',info.call(userObj3));
console.log(' ');
console.log(' ',info.call(userObj4));
console.log(' ');
console.log('Public Functoin For Array Reference Data Type: ');
console.log(' ');
function computeArray(){return 'array coputation arrea'};
const numbers = [1,42, 3, 34, 534, 345];
console.log(' ', computeArray());
console.log(' ');
console.log(' ', computeArray.call(numbers));
console.log(' ');
function array(){return this.reduce( (a, c) => a+c, 0) };
const arrayw = () => this;
console.log(' ', array.call(numbers));
console.log(' ');
console.log(' ', array.apply(numbers));
console.log(' ');
console.log(' ', array.bind(numbers)());
console.log(' ');
