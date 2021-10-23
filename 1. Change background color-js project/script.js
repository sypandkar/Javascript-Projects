//selectors
const btn = document.querySelector('button');
const bodyBcg = document.querySelector('body');
const colors = ['orange','yellowgreen','green','pink','blue'];


//default background color 
bodyBcg.style.backgroundColor = 'skyblue';

//event listener (we can mention variable only & then addEventListener)
btn.addEventListener('click' , changeColor);

//function
function changeColor(){
  
  //this is how we select the values form array
  //body.style.backgroundColor = colors[2];

  
  let random = Math.floor(Math.random()*colors.length);
  //with math random every time we would have a random number between 0 to 0.9999 so we used Math.floor (which selects the lowest nearest value)

  bodyBcg.style.backgroundColor = colors[random]; 

}


