
console.log(' ');

console.log('130.js is workingin fine ..................');

console.log(' ');

console.log('script start:');

console.log(' ');

console.log('callback handed over to the Web API:');

const id = setTimeout(()=>{
  console.log('arrow function callback');
}, 2000);

console.log(' ');

console.log('script end');

console.log(' ');

for( var i = 0; i < 2000; i++ ){
  console.log('inside loop');
}

console.log('callback 2 second wait completed but GEC is bussy');

console.log(i);

console.log('set time out id: ', id);

console.log(' ');

console.log('Now callback is being executed by GEC');

console.log(' ');

clearTimeout(id);






