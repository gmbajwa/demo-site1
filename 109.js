
console.log(' ');

console.log('109.js is workingin fine ..................');

console.log(' ');

const navItems = document.getElementsByTagName('a');

console.log(navItems);

console.log(' ');

console.log('1- for:');

for( let i = 0; i< navItems.length; i++ ){
  const navItem = navItems[i];
  navItem.style.color= '#fff';
  navItem.style.backgroundColor = 'green';
  navItem.style.fontWeight = 'bold';
  navItem.style.padding = '1rem 1rem 0.5rem 1rem';
  navItem.style.borderRadius = '5px';
}

console.log(' ');

console.log('2- for of:');
for( let item of navItems ) {
  console.log(item);
}

console.log(' ');

console.log('3- for in:');
for( let key in navItems ) {
  console.log(key);
}
console.log(' ');

console.log('4- forEach Method:');

console.log(' ');

const navItems2 = document.getElementsByTagName('a');

console.log(navItems2);

console.log(' ');

console.log(typeof navItems2);

console.log('as navItems2 is object so for checking is it an Array:');

console.log(' ');

const navItems2IsArray = Array.from(navItems2);

console.log(' ');

console.log('typeof navItems2Isarray:', typeof navItems2IsArray);

console.log(' ');

console.log('navItems2IsArray is Array Object:', Array.isArray(navItems2IsArray));

console.log(' ');

navItems2IsArray.forEach( s => s.style.color = 'red' );

console.log(' ');

console.log('Working With NodeList: return by querySelectorAll');

console.log(' ');

const navItems3 = document.querySelectorAll('a');

console.log('navItems3:', typeof navItems3 );

console.log(' ');

console.log(navItems3);

console.log(' ', );

console.log('Applying for, for of, for in and forEach of NodeList ', );

console.log(' ', );

console.log('1- for loop on NodeList return by querySelectorAll: ', );

console.log(' ', );

for(let s = 0; s< navItems3.length; s++ ){
  navItems3[s].style.color = 'yellow';
}

console.log(' ', );

console.log('2- for of loo on NodeList: ', );

console.log(' ', );

const navItems3NodeList = document.querySelectorAll('a');

console.log('navItems3NodeList for of loop ', );

for( let s of navItems3NodeList){
  s.style.color = 'pink';
}

console.log(' ', );

console.log('3- for in loop at navItems3NodeList ', );

console.log(' ', );

for( let s in navItems3NodeList ){
  console.log('can\'t use foor in loop at NodeList');
}

console.log(' ', );

console.log('4- forEach Method on NodeList: ', );

navItems3NodeList.forEach( s => {
  s.style.color = 'brown';
  s.style.backgroundColor = 'pink';
}

);

console.log('converting NodeList to array: ', );

console.log(' ', );

console.log('typeofo navItems3NodeList ', typeof navItems3NodeList);

const navItems3NodeListToArray = Array.from(navItems3NodeList);

console.log(' ', );

console.log('typeofo navItems3NodeListToArray: ', typeof navItems3NodeListToArray);

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

