//selectors
const previewBtn = document.querySelector("#left-btn");
const nextBtn = document.querySelector("#right-btn");
const container = document.querySelector(".images");

let counter = 0;

//eventlistner
previewBtn.addEventListener("click", earlierSlide);
nextBtn.addEventListener("click", nextSlide);

//function
function nextSlide() {
  container.animate([{ opacity: "0.3" }, { opacity: "3.0" }], {
    duration: 1000,
    fill: "forwards",
  });

  //when i keep clicking i get to the 4 then it change back to the negative -1 and i go back to the 0 . because here 0 is my first image. now they should be infinite loop right now.
  if (counter === 4) {
    counter = -1;
  }

  counter++;
  container.style.backgroundImage = `url(img-${counter}.jpg)`;
}

function earlierSlide() {
  container.animate([{ opacity: "0.3" }, { opacity: "3.0" }], {
    duration: 1000,
    fill: "forwards",
  });

  //here we are substracting from the counter. If the counter is zero so if we are going back all the way to the 0 then we would want to change this counter to 5 and the reason for this if the image last one is 4 i know i am gonna change it back to the  5 then i am gonna do counter negative.
  if (counter === 0) {
    counter = 5;
  }

  counter--;
  container.style.backgroundImage = `url(img-${counter}.jpg)`;
}
