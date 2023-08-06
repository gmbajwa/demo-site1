
console.log(' ');

console.log('101.js is workingin fine ..................');

console.log(' ');

const callOnce = () => {

	let counter = 0;

	return () => {

		if( counter < 1 ) {
			console.log('Hi you call Me First Time.');
			counter++;
		}else{
			console.log('Hi, Me Allready Called!!!.');
		}
	}

}

const once = callOnce();
once();
once();
const towice = callOnce();
towice();
towice();
