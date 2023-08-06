
console.log(' ', );

console.log('90.js is working is fine................ ', );

console.log(' ', );

console.log('Classes: getter and setter ', );

console.log(' ', );

class Person{

	constructor(fName, lName, age){

		this.fName = fName;
		this.lName = lName;
		this.age = age;

	}

	get fullName(){

		return `${this.fName} ${this.lName}.`;
	}


	set fullName(fullName){

		const [firstName, lastName] = fullName.split(" ");
		this.fName = firstName;
		this.lName = lastName;
	}
}

const person1 = new Person('Mustafa', 'Bajwa', 35);

console.log('person1: ', person1);

console.log(' ');

console.log('person1.fullName:', person1.fullName);

person1.fullName = 'ghulam mustafa';

console.log(' ', );

console.log('person1.fullName: ',person1.fullName );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

