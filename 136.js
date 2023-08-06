
console.log(' ');

console.log('136.js is workingin fine ..................');

console.log(' ');

console.log('resolve promise after 2 second');

const promiseGenerator = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!true) resolve('promise fulfilled');
      reject('promise unfulfilled');
    }, 2000);
  });
};
promiseGenerator().then(onSuccess => console.log(onSuccess))
.catch(onFailure => console.log(onFailure));
