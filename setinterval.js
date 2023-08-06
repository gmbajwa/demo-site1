
console.log(' ');

console.log('setinterval.js is workingin fine ..................');

console.log(' ');

const body = document.body;

const stop = document.querySelector('button');

console.log('body: ', body );

console.log('stop: ', stop );


const intervalId = setInterval(()=>{
  const red = Math.floor(Math.random() * 126);
  const green =  Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}, 1000);

console.log(' ', );

stop.addEventListener('click', ()  => {
  clearInterval(intervalId);
  stop.textContent = body.style.backgroundColor;

});

console.log(' ', );

console.log(' ', );

console.log(' ', );

