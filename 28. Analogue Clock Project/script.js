// const secDiv = document.getElementById("sec");
// const minDiv = document.getElementById("min");
// const hourDiv = document.getElementById("hour");

// setInterval(updateClock, 1000);

// function updateClock() {
//   let date = new Date();
//   let sec = date.getSeconds() / 60;
//   let min = (date.getMinutes() + sec) / 60;
//   let hour = (date.getHours() + min) / 12;

//   secDiv.style.transform = "rotate(" + sec * 360 + "deg)";
//   minDiv.style.transform = "rotate(" + min * 360 + "deg)";
//   hourDiv.style.transform = "rotate(" + hour * 360 + "deg)";
// }

setInterval(() => {
  date = new Date();
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();
  hrotation = 30 * htime + mtime * 0.5; // hour hand rotates by 30deg in  1hr & when min hand completes 360 deg rotation it tends to move hr hand. so we must consider minute hand also so we are adding the rotation of min hand in 1 min.
  // 12 hr = 360 deg.  so 1hr = 360/12 = 30deg.
  // if 1 hr ratation is 30deg (1 hr = 60 min)so 60 min = 30 deg & for  1 min = 1/2 deg.
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);
