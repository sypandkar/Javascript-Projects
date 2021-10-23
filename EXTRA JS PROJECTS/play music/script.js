var backgroundVideo = document.getElementById("background-video");
var icon = document.getElementById("icon");

icon.addEventListener(
  (onclick = function () {
    if (backgroundVideo.paused) {
      backgroundVideo.play();
      icon.src = "pause.png";
    } else {
      backgroundVideo.pause();
      icon.src = "play.png";
    }
  })
);

// <!-- <script>
// // var mysong = document.getElementById("mysong");
// var backgroundVideo = document.getElementById("background-video");

// var icon = document.getElementById("icon");

// icon.onclick = function () {
//   if (backgroundVideo.paused) {
//     // mysong.play();
//     backgroundVideo.play();
//     icon.src = "pause.png";
//   } else {
//     // mysong.pause();
//     backgroundVideo.pause();
//     icon.src = "play.png";
//   }
// };
// </script> -->
