console.log(' ');
console.log('76.js is working fine............. ');
console.log(' ');
console.log('arrow function: ');
console.log(' ');
console.log('Don\'t have this keyword ');
console.log(' ');
console.log('arrow function\'s this can\'t change to change ');
console.log(' ');
function property2(){
let fname = 'surrounding';
}
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	about: () => {
		console.log(this);
		this.fname;
	}
}
console.log('log 1 ', userObj.about.call(userObj));
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
