var countDownDate = new Date(" Oct 23, 2022 12:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = `${days}`;
  document.getElementById("hrs").innerHTML = `${hours}`;
  document.getElementById("min").innerHTML = `${minutes}`;
  document.getElementById("sec").innerHTML = `${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("root").innerHTML = "Time Expired";
  }
}, 1000);
