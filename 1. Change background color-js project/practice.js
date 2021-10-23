//selectors
const btn = document.querySelector('button');
const bodyBcg = document.querySelector('body');
const colortype = document.querySelector('#colorname');
const colors = ['orange','yellowgreen','green','pink','blue'];

//default background color 
bodyBcg.style.backgroundColor = 'skyblue';

//event listener (we can mention variable only & then addEventListener)
btn.addEventListener('click' , changeColor);

//function
function changeColor(){
  
let random = Math.floor(Math.random()*colors.length);
  
  bodyBcg.style.backgroundColor = colors[random]; 
  
colortype.innerHTML = colors[random];


}


