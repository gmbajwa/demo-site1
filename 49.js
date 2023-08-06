console.log('49.js is working.....');
console.log(' ');
console.log('Lexical Envirnoment....');

console.log(' ');
let inApp = 'global scope';
function app(){

	function subFA(){
		
		console.log('Level 2:');
		
		console.log(' ');
		console.log('inApp: ', inApp);

		function subFAFA(){

			console.log(' ');
			console.log('Level 3:');

			console.log(' ');
			console.log('inApp', inApp);

			function subLevel4(){

				
				console.log(' ');
				console.log(' ');

				console.log('From subLevel4:', inApp);
				
				console.log(' ');

			}

			subLevel4();

		}

		subFAFA();

		
	}

	subFA();

	console.log(' ');
	console.log('Level 1:');

	console.log(' ');
	console.log('inApp', inApp);
}

app();
