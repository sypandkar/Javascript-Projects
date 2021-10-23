//selector
let baloonGallery = document.querySelector("#balloon-gallery");

//Eventlistener
document.addEventListener("mouseover", function (e) {
  if (e.target.className === "balloon") {
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
    e.target.style.border = "4px double white";
    e.target.animate([{ opacity: 0.3 }, { opacity: 3.0 }], {
      duration: 8000,
      fill: "forwards",
    });
  }
});
