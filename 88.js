
console.log(' ', );

console.log('88.js is working.............. ', );

console.log(' ', );

console.log('Inheritance: super ', );

console.log(' ', );

class Animals{

	constructor(name, age){

		this.name = name;
		this.age = age;
	}

	eat(){

		return `${this.name} is eating.`;
	}

	isSuperCute(){
	
		return this.age <=1;
	}
	isCute(){
	
		return true;
	}

}

const animal1 = new Animals('animal1', 23 );

console.log('animal1: ', animal1);

console.log(' ', );

console.log('animal1.eat(): ', animal1.eat() );

console.log(' ', );

console.log('animal1.isSuperCute(): ', animal1.isSuperCute() );

console.log(' ', );

console.log('animal1.isCute(): ', animal1.isCute() );

console.log(' ', );

class Dogs extends Animals{

	constructor(name, age,  speed){

		super(name, age);

		this.speed = speed;

	}

	run(){

		return `${this.name} is running at speed of ${this.speed}.`;
	}

}

const dog1 = new Dogs('benny', 2, 45 );

console.log('dog1: ', dog1);

console.log('dog1.eat(): ', dog1.run());

console.log(' ', );

console.log('dog1.isSuperCute(): ',dog1.isSuperCute() );

console.log(' ', );

console.log('dog1.isCute(): ',dog1.isCute() );

console.log(' ', );

console.log('dog1.run(): ', dog1.run());

console.log(' ', );

class Rabit extends Animals{

	constructor(name, age){

		super(name, age);
	}
	eat(){

		return `${this.name} is eating carrot.`;
	}
	isSuperCute(){
	
		return this.age <= 2;
	}
	isCute(){
	
		return this.age <= 2;
	}
	hasLongEar(){

		return true;
	}
}

const rabit = new Rabit( 'rabbi', 3 );

console.log('rabit ', rabit );

console.log('rabit.eat():', rabit.eat());

console.log(' ', );

console.log('rabit.isSuperCute():', rabit.isSuperCute() );

console.log(' ', );

console.log('rabit.isCute(): ', rabit.isCute());

console.log(' ', );

console.log('rabit.hasLongEar(): ',rabit.hasLongEar() );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );



