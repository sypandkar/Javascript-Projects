//selectors
const light = document.querySelector("#bulb");

//EventListener
light.addEventListener("click", function (e) {
  if (e.target.classList.toggle("bulb-on")) {
    e.target.animate([{ opacity: "0.3" }, { opacity: "3.0" }], {
      duration: 5000,
      fill: "forwards",
    });
  }
});

//what i learned here
// .toggle("") =
