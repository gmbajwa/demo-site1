
console.log(' ');

console.log('132.js is workingin fine ..................');

console.log(' ');

function a(a, b, cb){
  a += 34;
  cb(a, b);
}


a(3, 14, (a, b) => {
  console.log(a+b);
});


