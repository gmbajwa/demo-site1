
console.log(' ');
console.log('126.js is workingin fine ..................');

console.log(' ');

console.log('Randon Color Generator: ', );

console.log(' ', );

const heading = document.querySelector('h1');
const button = document.querySelector('button');
const body = document.body;

console.log('button: ', button );

console.log(' ', );

console.log('body ', body );

console.log('Adding Event Listener to button: ', );

const randomColorGenerator = ( ) => {
  const red = Math.floor(Math.random() * 256 );
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}


button.addEventListener('click', e => {

  heading.textContent = randomColorGenerator();
  button.textContent = randomColorGenerator();
  body.style.backgroundColor = randomColorGenerator();
});

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

