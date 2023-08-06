console.log(' ');
console.log('75.js is working.............. ');
console.log(' ');
console.log('Using call() ');
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com',
	about(p1, p2){
	return {
		st1: 'function declaration',
		st2: 'function expression',
		st3: 'arrow function',
		st4: 'function method',
		st4: this.fname,
		st5: p1,
		st6: p2
	}
	}
}
let info = userObj.about;
console.log('log 1 ', info.call(userObj, 'a1', 'a2'));
console.log(' ');
console.log('Using apply() ');
const userObj2 = {
	id: 2, 
	fname: 'Saleem',  
	username: 'username2', 
	email: 'email1@g.com2',
	about(p1, p2, p3){
	return {
		st1: 'function declaration',
		st2: 'function expression',
		st3: 'arrow function',
		st4: 'function method',
		st4: this.fname,
		st5: p1,
		st6: p2,
		st7: p3
	}
	}
}
let info2 = userObj2.about;
console.log('log 1 ', info2.apply(userObj2, ['a1', 'a2', 'a3']));
console.log(' ');
console.log('Using bind() ');
const userObj3 = {
	id: 3, 
	fname: 'Maleem',  
	username: 'username3', 
	email: 'email1@g.com23',
	about(p1, p2, p3, p4){
	return {
		st1: 'function declaration',
		st2: 'function expression',
		st3: 'arrow function',
		st4: 'function method',
		st4: this.fname,
		st5: p1,
		st6: p2,
		st7: p3,
		st8: p4
	}
	}
}
let info3 = userObj3.about;
console.log('log 3 ', info3.bind(userObj3, 'a1', 'a2', 'a3', 'a4')());
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

