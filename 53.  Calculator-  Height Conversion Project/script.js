//selectors
const form = document.querySelector("form");

//eventlistener
form.addEventListener("submit", function (e) {
  let feet = document.querySelector("#feet").value;
  let inches = document.querySelector("#inches").value;
  const results = document.querySelector("#results");
  e.preventDefault();

  //if feets & inches are not number , then
  if (isNaN(feet) || isNaN(inches)) {
    results.textContent = "Please enter a valid number!";
  } else if (feet < 0) {
    results.textContent = "Please enter a feet value > 0";
  } else if (inches < 0 || inches >= 12) {
    results.textContent = "Please enter an inches value between 0 and  12";
  } else {
    let totalInches = parseInt(feet) * 12 + parseInt(inches);
    results.textContent = `${totalInches * 2.54} cm`;
  }
});

// /*******************************************************/
// //What I learned here
// //1) .textCoontent works same as .innerHTML
// //2) feet = parseInt(feet.value);
// //   inches = parseInt(inches.value);
// // works same as Number(feet)

// //I can also write above program like this i.e use of .value & conversion to number like parseInt(feet) instead of Number(feet).

// //selectors
// const form = document.querySelector("form");

// //eventlistener
// form.addEventListener("submit", function (e) {
//   let feet = document.querySelector("#feet").value;
//   let inches = document.querySelector("#inches").value;
//   const results = document.querySelector("#results");
//   e.preventDefault();

//   //conversion to numbers(integer)
//   // feet = parseInt(feet.value);
//   // inches = parseInt(inches.value);

//   //if feets & inches are not number , then
//   if (isNaN(feet) || isNaN(inches)) {
//     results.textContent = "Please enter a valid number!";
//   } else if (feet < 0) {
//     results.textContent = "Please enter a feet value > 0";
//   } else if (inches < 0 || inches >= 12) {
//     results.textContent = "Please enter an inches value between 0 and  12";
//   } else {
//     let totalInches = Number(feet) * 12 + Number(inches);
//     results.textContent = `${totalInches * 2.54} cm`;
//     // document.querySelector("#feet").value = "";
//     // document.querySelector("#inches").value = "";
//   }
// });
