
console.log(' ');

console.log('137.js is workingin fine ..................');

console.log(' ');

console.log('Promise.resolve and Promise chaining');

console.log(' ');

const myPromise = Promise.resolve(4);

myPromise.then(onSuccess => {
  console.log(onSuccess)
  return onSuccess += 'tekhbox'; 
})
.then( onSuccess => {
  console.log(onSuccess);
  return onSuccess += 'metaversity';
}).then( onSuccess => {
  console.log( onSuccess );
  return Promise.resolve(onSuccess += 'new one tow ');
}).then( onSuccess => {
  console.log(onSuccess);
  return Promise.resolve('this is the success value');
}).then( value => {
  console.log(value);
  return value += 'hard is  hard';
}).then( nextValue => {
  console.log(nextValue);
});
