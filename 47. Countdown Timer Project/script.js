var countDownDate = new Date(" Oct 23, 2022 12:00:00").getTime();

//get time tells the miliseconds from 1 jan 1970 to the todays date.
var x = setInterval(function () {
  var now = new Date().getTime();
  //it will return todays date and time

  //now to find distance of target date and todays date we will subtract

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "root"
  ).innerHTML = ` Your next birthday having  <br> ${days}  days  ${hours} hours  ${minutes}  minutes  ${seconds} seconds`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("root").innerHTML = "time Expired";
  }
}, 1000);

//here we first wrote code from line no 6 to 23 then we simply put this code inside the function.
