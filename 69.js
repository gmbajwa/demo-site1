console.log(' ');
console.log('69.js is working................. ');
console.log(' ');
console.log('Object Cloning...................... ');
console.log(' ');
console.log(' ');
const userObj = {
	id: 1, 
	fname: 'kaleem',  
	username: 'username1', 
	email: 'email1@g.com'
}

const obj2 = userObj;
console.log('obj1: ', userObj);
console.log(' ');
console.log('Obj2: ', obj2);
console.log(' ');
console.log('Adding Only in Obj2 ');
obj2.newKey = 'this is new key only added in obj2';
console.log(' ');
console.log('obj1: ', userObj);
console.log(' ');
console.log('Obj2: ', obj2);
console.log(' ');
console.log('cloning Object using spread Operator new method of cloning: ');
console.log(' ');
const obj3 = {...userObj}
console.log(' ');
console.log('Obj3: ', obj3);
console.log(' ');
console.log('Only Added in obj3: ');
obj3.newKey = 'added in obj3 only';
console.log(' ');
console.log('now new obj3:', obj3);
console.log('now new userObj:', userObj);
console.log(' ');
console.log('Old Method ob Object cloning by using Object.assign() ');
const obj4 = Object.assign({}, userObj);
console.log(' ');
console.log('Object 4: ', obj4);
obj4.newKey = 'this is added in object 4 only';
console.log(' ');
console.log('Obj4: ', obj4);
console.log(' ');
console.log('userObj ', userObj);
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
