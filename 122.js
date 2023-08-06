
console.log(' ');

console.log('122.js is workingin fine ..................');

console.log(' ');

console.log('add click event on multiple Elements/Objects: ', );

console.log(' ', );

console.log('adding Eevent Listener One by One ', );

const target = document.querySelector('.btn-one');

console.log('target: ', target);

console.log(' ', );

const target2 = document.querySelector('.btn-two');

console.log('target2: ', target2 );

const target3 = document.querySelector('.btn-three');

console.log(' ', );

console.log('target3: ', target3 );

console.log(' ', );

target.addEventListener('click', function(){

  console.log('target', target)
  console.log('value of this:',  this)

});

target2.addEventListener('click', function(){

  console.log('targe2:', target2);
  console.log('value of this:', this);

});

target3.addEventListener('click', function(){

  console.log('target3:', target3);
  console.log('value of this:', this);

});
console.log(' ', );

console.log('adding event listener at once on all buttons: ', );

console.log(' ', );

const targetAllButton = document.querySelectorAll('.headline button');

console.log('targetAllButtons: ', targetAllButton );

for( let button of targetAllButton ){
  button.addEventListener('click', function(){

    console.log('You Clicked Me!!!');
    console.dir(this);
    console.log(button.textContent);

  });
}
console.log(' ', );

console.log('in case of callback once arrow function: ', );

console.log(' ', );

for( let button of targetAllButton ) {

  button.addEventListener('click', () =>{

    console.log('arrow function is callback');
    console.log(this);
    console.log(button.textContent);

  });

}

console.log(' ', );

console.log('adding event listener using traditional for loop ', );

for( let i = 0; i < targetAllButton.length; i++){

  targetAllButton[i].addEventListener('click', function(){

    console.log('added eventlinstener by tradintional for loop');
    console.log('annonymous funciton');
    console.log(this);

    

  });

}

console.log(' ', );

console.log('Traditinal for loop and arrow function: ', );

for( let i = 0; i < targetAllButton.length; i++ ){

  targetAllButton[i].addEventListener('click', () => {


      console.log('traditional for loop and arrow function');
    console.log(this);

  });

}


console.log(' ', );

console.log('forEach method using to add event lisntener: ', );

console.log(' ', );
targetAllButton.forEach(function(button){
  button.addEventListener('click', function(){
    console.log('forEach Method and annonymous function');
    console.log(this);
    console.log(this.textContent);
  });
});
console.log(' ', );

console.log('forEach method and arrwo function: ', );
targetAllButton.forEach((button)=>{
  button.addEventListener('click', () => {
    console.log('forEach function and arrow function');
    console.log(this);
    console.log(button.textContent);
  });
});

console.log(' ', );

console.log('forin loop: ', );

console.log(' ', );

for( let button in targetAllButton ){
  console.log(typeof button);
  console.log(Array.isArray(targetAllButton) );
  console.log('so we cannot use for in loop with querySelectorAll');
}

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

