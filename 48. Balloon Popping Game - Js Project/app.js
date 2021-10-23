let baloongallery = document.querySelector("#balloon-gallery");

//EventListener
document.addEventListener("click", function (e) {
  if (e.target.className === "balloon") {
    e.target.style.backgroundColor = "rgba(255,255,255,0.02)";
    e.target.style.border = "5px dotted white";
  }
});
