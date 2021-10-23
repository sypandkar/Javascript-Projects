

//selectors
const hexNumbers = [0,1,2,3,4,5,6,7,8,9, 'A' ,'B' , 'C' , 'D' , 'E' , 'F'];
const button = document.querySelector('.btn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('#hex-value');

//Event Listener
button.addEventListener ('click' , gethexvalue);

//function
function gethexvalue() {

  let hexCol = '#';

  for (let i=0;i<6;i++ ){
    let random = Math.floor(Math.random()*hexNumbers.length);

    hexCol=hexCol+hexNumbers[random];

  }

  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}

