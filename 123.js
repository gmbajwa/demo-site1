
console.log(' ');

console.log('123.js is workingin fine ..................');

console.log(' ');

console.log('Event Object Passed By Browser to callBack and provide callbace to JS Engine whole is done by Browser......!!! ', );

console.log(' ', );

const targetAllButtons = document.querySelectorAll('.headline button');

console.log('target: ', targetAllButtons );

for( let button of targetAllButtons ) {
  button.addEventListener('click', (e) => {
    console.log(e.target);
  });
}

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );



