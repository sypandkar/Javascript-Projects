//selectors
const lowerCount = document.querySelector('#lower-counter')
const addCount = document.querySelector('#higher-counter')
let counter = document.querySelector('.numbercount')

let count = 0;

//eventListener
addCount.addEventListener('click' , increaseNumber)
lowerCount.addEventListener('click' , reduceNumber)


//function
function increaseNumber(){
  count++;
  counter.innerHTML = count;

  //for plus values (1,2,3.... color will be green)
  if(counter.innerHTML>'0'){
    counter.style.color = 'green'
  }else if (counter.innerHTML === '0'){
    counter.style.color = 'white'
  }

  //animate the function 
  counter.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000,fill:'forwards'});
}


function reduceNumber(){
  count--;
  counter.innerHTML = count;

   //for minus values (-1,-2,-3.... color will be green)
  if(counter.innerHTML<'0'){
    counter.style.color='red'
  }else if(counter.innerHTML ==='0'){
    counter.style.color='white'
  }

  //animate the function 
  counter.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000,fill:'forwards'});
}

