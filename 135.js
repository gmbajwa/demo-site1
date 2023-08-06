
console.log(' ');

console.log('135.js is workingin fine ..................');

console.log(' ');

console.log('Write a Function which will return a promise: ');

const promiseProducer = () => {

  const myPromise = new Promise( (resolve, reject) => {
    
    if(!true) resolve('promise fulfilled');

    reject('promise unfulfilled');

  }  );

  return myPromise;

};

const myPromise1 = promiseProducer();

myPromise1.then(onSuccess => console.log(onSuccess))
.catch(onFailure => console.log('unfulfilled promise'))





