console.log(' ');
console.log('68.js is working fine...... ');
console.log(' ');
console.log('Iterator: String, Array, Set and Map ');
console.log(' ');
console.log('Map Object is also iterator: can use for of loop ');
console.log(' ');
console.log('Before Study Map Iterator Object revisit the object first ');
console.log(`
1- Object Store key value pair

2- when defining object using {} called Object literal syntex method of defining object.
3- Keys are always in String Data types 99%

4- Only 1 % Keys are in Symbol Data Types

5- If we add key as Integer JS Engine automatically convert this Number Data Type Key into String Data Type.

6- no any dublicate keys are allow but discarded all duclicates in Objects
`);
const person = {
	id: 1,
	fname: 'this is person first name',
	18: `this number data type key's value`
}
console.log(`${person.fname}`);
console.log(`${person[`fname`]}`);
console.log(`${person[18]}`);
console.log(` `);
for(let key in person){
	console.log(key, typeof key);
}
console.log(`
1- Iterator Map Object also stor key value pair like Object.
`);
console.log(``);
const personMap = new Map();
console.log(`PersonMap: ${personMap}`);
console.log('PersonMap:', personMap);
console.log(``);
personMap.set(`id`, 1);
console.log(``);
console.log(`PersonMap: ${personMap}`);
console.log('PersonMap:', personMap);
console.log(``);
personMap.set('pname', 'person name')
console.log(``);
console.log(`PersonMap: ${personMap}`);
console.log('PersonMap:', personMap);
console.log(``);
console.log(``);
console.log(`PersonMap: ${personMap}`);
console.log('PersonMap:', personMap);
console.log(`${personMap.size}`);
personMap.set(`age`, 2232);
personMap.set([1,3,5,'dddd'], 'this is array');
personMap.set({1: 1231, namewer:'this sdff'}, 'this is an object');
console.log(``);
console.log(`${personMap.size}`);
console.log(`${personMap.get(`pname`)}`);
console.log(``);
console.log(`accessing type of each key of personMap`);
console.log(``);
for(let typeofkey of personMap.keys()){
	console.log(`Type of Each personMap key: ${typeofkey} is: ${typeof typeofkey}`);
}
console.log(``);
for(let mi of personMap.keys()){
	console.log(`value of each personMap key is: ${personMap.get(mi)}`);
}
console.log(``);
console.log(`creating object and extra info in map `);
console.log(``);
const personObj = {
	id: 23,
	name: 'army'
}
console.log('Person Object: ', personObj);
console.log(``);
console.log(`Creating peron extra infor map:`);
console.log(``);

const extrainfo = new Map();
extrainfo.set('k1', 'v1');
extrainfo.set('k3', 'v2');
extrainfo.set('k4', 'v4');
extrainfo.set('k5', 'v5');
console.log('extrainfo map: ', extrainfo);
console.log(' ');
console.log('Setting personObj as a key to map extrainfo ');
console.log(' ');
extrainfo.set(personObj, {'salary': 23423, 'gender': 'M'});
console.log('Now extra info map is like: ', extrainfo);
console.log(' ');
console.log('accessing values from Object: ');
console.log(' ');
console.log('PersonObje Id: ', personObj.id);
console.log('PersonObje Name: ', personObj.name);
console.log(' ');
console.log('Accessing personObj extra information from extrainfo Map: ');
console.log(' ');
console.log('PersonObj Salary: ', extrainfo.get(personObj).salary);
console.log('PersonObj Gender: ', extrainfo.get(personObj).gender);
