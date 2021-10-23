//selectors
let outputscreen = document.getElementById('output-screen');

//function

//allows to display numbers one after another
function display(num){
  outputscreen.value += num;
}
// The try statements lets you to test a block of code for errors.
//The catch statement lets you handle the error

function calculate(){
  try{
    outputscreen.value = eval(outputscreen.value);
  }
  catch (err){
    alert("invalid")

  }
}

//          try {
//    Block of code to try
//  }
//  catch(err) {
//    Block of code to handle errors
//  }


//this will clear all the inputbox
function Clear(){
  outputscreen.value = " ";
}
//delete last number
function del(){
  outputscreen.value = outputscreen.value.slice(0,-1);
}

