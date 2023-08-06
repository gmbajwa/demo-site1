
console.log(' ');

console.log('124.js is workingin fine ..................');

console.log(' ');

console.log('script started    !!!!');

const allButtons = document.querySelectorAll('.headline button');

allButtons.forEach( button =>{
  button.addEventListener('click', e => {
    let counter = 0;
    for( let i = 0; i < 1000000000; i++ ){
        counter += i;
    }

    console.log(e.currentTarget.textContent, counter)
  } );
});

console.log(' ', );
let sum = 0;
for( let i = 0; i < 1000000000; i++ ){
    
  sum += i;

}

console.log('Sum:', sum);
console.log('script ended                 !!!! ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

