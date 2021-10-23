document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  var eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    //it returns the size and position of an element. It returns 8 properties left,right,top,bottom,height,width

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    //atan2 retirns angle deta & pi value

    let rotation = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rotation + "deg)";
  });
}
