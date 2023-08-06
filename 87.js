
console.log('87.js is workig fine................ ', );

console.log(' ', );

console.log('Classes More Practices:');

console.log(' ', );

class Animal{

	constructor( name, age ){
	
		this.name = name;
		this.age = age;
	}
	
	eat(){
	
		return `${this.name} is eating.`;
	}

	isSuperCute(){
	
		return this.age <= 1;
	}

	isCute(){
	
		return true;
	}
}


const animal1 = new Animal( 'tomy', 3 );

console.log( animal1  );

console.log(' ', );

console.log('animal1.eat(): ', animal1.eat()  );

console.log(' ', );

console.log('animal1.isCute():',animal1.isCute() );

console.log(' ', );

console.log('animal1.isSuperCute.(): ', animal1.isSuperCute() );

console.log(' ', );

class Dog{

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

const dog1 = new Dog( 'tommy', 3 );

console.log('dog1: ',dog1 );

console.log(' ', )

console.log('dog1.eat(): ', dog1.eat() );

console.log(' ', );

console.log('dog1.isSuperCute(): ',dog1.isSuperCute() );

console.log(' ', );

console.log('dog1.isCute(): ',dog1.isCute() );

console.log(' ', );

console.log('Inheritance: ', );

console.log(' ');

console.log('Rabbit Class ', );

class Rabbit extends Animal{


}

const rabit1 = new Rabbit( 'rabit1', 3 );

console.log(' ', );

console.log('rabit1: ',rabit1 );

console.log(' ', );

console.log('rabit1.eat(): ',rabit1.eat() );

console.log(' ', );

console.log('rabit1.isSuperCute(): ', rabit1.isSuperCute());

console.log(' ', );

console.log('rabit1.isCute(): ', rabit1.isCute() );

console.log(' ', );

console.log('Parrat Callss: ', );

console.log(' ', );

class Parrat extends Animal{


}

const parrat1 = new Parrat( 'titi', 5 );

console.log('parrat1: ', parrat1);

console.log(' ', );

console.log('parrat1.eat(): ', parrat1.eat() );

console.log(' ', );

console.log('parrat1.isSuperCute(): ', parrat1.isSuperCute() );

console.log(' ', );

console.log('parrat1.isCute(): ', parrat1.isCute());

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );


