console.log(' ');
console.log('53.js is working............ ');
console.log(' ');
console.log('Parameters Destructuring ');
console.log(' ');

const person = {
	name: 'Mustafa Bajwa',
	age: 35,
	gender: 'Male',
	education: 'BSIT'
}

const detail = () => {
	console.log('Printing Person detail using dot operator:');
	console.log(' ');
	console.log('Paerson Name: ', person.name);
	console.log('Paerson age: ', person.age);
	console.log('Paerson Gender: ', person.gender);
	console.log('Paerson Education: ', person.education);

}

detail();
console.log(' ');


const detail2 = ({name, age, gender, education}) => {

	console.log('Printing Person detail using parameter destructing:');
	console.log(' ');
	console.log('Person Name:',name);
	console.log('Person age:', age);
	console.log('Person Gender:',gender);
	console.log('Person Education:', education);

}

detail2(person);
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
