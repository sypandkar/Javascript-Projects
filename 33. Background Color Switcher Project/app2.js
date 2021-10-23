//selectors
document.getElementById('btn-1').onclick = switchOrange;
document.getElementById('btn-2').onclick = switchSkyblue;
document.getElementById('btn-3').onclick = switchYellow;
document.getElementById('btn-4').onclick = switchBlack;

//function
function switchOrange(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'orange';
}

function switchSkyblue(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'skyblue';
}

function switchYellow(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
}

function switchBlack (){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
}