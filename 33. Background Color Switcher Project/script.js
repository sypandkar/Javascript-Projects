

function changeBG(color){
  document.body.style.backgroundColor = color;


  //the default text color is black so when we convert bodybg color to black then the text color should be white so for that we used if else condition. 
  //here text is an array because it has h1 and h2 values. so we used
  let text = document.getElementsByClassName('text');
  if(color ==='black'){
    for(let elm of text){
      elm.style.color ='white';
    }
  }else{
    for(let elm of text){
      elm.style.color = 'black';
    }
  }
}

