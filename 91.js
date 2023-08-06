
console.log(' ', );

console.log('91.js is working fine........  ', );

console.log(' ', );

console.log('Static Methods and Properties: ', );

console.log(' ', );

class Person{

	constructor( name , age){

		this.name = name;
		this.age = age;
	}

	static classInfo(){

		return `class static method: `;

	}

	static desc = 'static property used to initialize the application:';

	get pname(){
		return this.name;
	}

	get page(){

		return this.age;
	}

}

const person1 = new Person( 'Danish', 43);

console.log('person1: ', person1);

console.log(' ', );

console.log('person1 pname: ',person1.pname );

console.log(' ', );

console.log('person1 age', person1.page );

console.log(' ', );

console.log('Person.classInfo() ', Person.classInfo() );

console.log(' ', );

console.log('calling class method on object: ', Person.classInfo() );

console.log(' ', );

console.log('static property: ', Person.desc);

console.log(' ', );

console.log(' ', );

console.log(' ', );

