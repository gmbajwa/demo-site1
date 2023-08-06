console.log(' ');
console.log('56.js is working....... ');
console.log(' ');
console.log('Array Heigher Order Functions: ........ ');
console.log(`

1- foreach Array Height Order Function.

2- map Array Heigher Order Function.

3- filter Array Heigher Order Function.

4- reduce Array Heigher Order Function.

`);
console.log(`

Why we are in need to use arrays.

and

also Why we are in need to use Objects.

as well as loops.

`);
console.log(' ');


let name = 'Ghulam Mustafa vahea ibraheemi';

// make name string in upper case
//

name.toUpperCase();

console.log('Name is upper case', name);

console.log(' ');

let uname = name.toUpperCase();

console.log('uname:', uname);

console.log(' ');

console.log('And for what about second use if we in need to make upper case of second name of any user ');
console.log(' ');

let name2 = 'Tabbassam Nehnaaz';

console.log('name2 in upper case:', name2);

console.log(' ');
let name2U = name2.toUpperCase();
console.log(' ');
console.log('Name2 is upper case: ', name2U);
console.log(' ');
console.log('What if we are in need to change the case of thousands or millions of user\'s name in upper case: ');
console.log(' ');
const userNames = ['name1', 'name2', 'name3', 'name4', 'name4', 'name6'];
const changeCase = getName => getName.toUpperCase();
for( let userName of userNames ){

	console.log(changeCase(userName));

}
console.log(' ');

console.log('User salaries increase by 2% on this Eid')

const usersSalary = [3256, 2124, 7453, 8604, 1093, 9201];

const doubleSalary = userSalary => userSalary * 2;

for( let userSalary of usersSalary ) {

	console.log('Existing Salary: ', userSalary, '* 2',' = ',  doubleSalary(userSalary));

}


userNames.forEach((i, v) => console.log(i.toLowerCase()));
console.log(' ');
const appUsers = [
	{id:1, firstName:'kadihaan', salary: 345234, joining:'121212', designation:'Snr'},
	{id:2, firstName:'fatheen', salary: 35234, joining:'121212', designation:'Jnr'},
	{id:3, firstName:'daowd', salary: 342311, joining:'443344', designation:'Pro'},
	{id:4, firstName:'salah', salary: 9876543, joining:'997744', designation:'tre'},
	{id:5, firstName:'muneeb', salary: 848933, joining:'554433', designation:'Mid'},
	{id:6, firstName:'Najeeb', salary: 7833292, joining:'123487', designation:'Ass'}
];

const designations = appUsers.map(v => v.designation.toUpperCase());
console.log('user designation:', designations);
const ids = appUsers.map(v => v.id*3);
console.log('user ids:', ids);
const firstName = appUsers.map(v => v.firstName.toUpperCase());
console.log('user first name:', firstName);
const salary = appUsers.map(v => v.salary*7);
console.log('user salary:', salary);
const joining = appUsers.map(v => v.joining + 6);
console.log('user joining date:', joining);

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
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
