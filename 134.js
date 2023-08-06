
console.log(' ');

console.log('134.js is workingin fine ..................');

console.log(' ');

// Passin String

const myPromise = new Promise((resolve, reject) => {
  
  if(true) resolve('promise resolved !!!');
  
  reject('promise not fullfilled !!!');

});


myPromise.then( 

  onSuccess => console.log(onSuccess), 

  onFailure => console.log(onFailure) 

);

// Passing Object
//

const myPromise2 = new Promise( (resolve, reject) => {

  if(true) resolve({id:2, passing: 'Object'});

  reject( 'error' );

} );

// Object Consumption
//

myPromise2.then(

  onSuccess => console.log(onSuccess.passing), 

  onFailure => console.log(onFailure)

);

// Passing Array
//

const myPromise3 = new Promise( (resolve, reject) => {
  if(!true) resolve( () => console.log('this is function') );
  reject( () => console.log('this is rejected function') );
});

myPromise3.then(

  resolve => console.log(resolve), 

  reject => console.log(reject)

);

// Passing Array
//

const myPromise4 = new Promise( (resolve, reject) => {
 if(true) resolve([1, 2, 3, 4, 5]);
  reject([10, 9, 8, 7, 6]);
});

myPromise4.then( 

  onSuccess => console.log(onSuccess[3]), 

  onFailure => console.log(onFailure[2])

).finally('thanks for consuming Our APIs');

