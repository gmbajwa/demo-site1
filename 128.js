
console.log(' ');

console.log('128.js is workingin fine ..................');

console.log(' ');

console.log('Event Bubling/Propagation and Event Delegation: ', );

console.log(' ', );

const grandparent = document.querySelector('.grandparent');

console.log(' ', );

console.log('grandparen: ', grandparent);

console.log(' ', );

// Event Bubbling/ Propagation
//
grandparent.addEventListener('click', e => {
  console.log(e.target);
} )

