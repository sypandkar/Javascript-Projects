// const form = document.querySelector("form");

// form.addEventListener("submit", function (xyz) {
//   xyz.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");

//   if (height === "" || height < 0 || isNaN(height)) {
//     //NaN !== NaN
//     results.innerHTML = "Please provide a valid height";
//   } else if (weight === "" || weight < 0 || isNaN(weight)) {
//     results.innerHTML = "Please provide a valid weight";
//   } else {
//     //calculate BMI
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //display the results
//     results.innerHTML = `<div>${bmi}</div>`;
//   }
// });

//selector
const form = document.querySelector("form");
//eventlistener
form.addEventListener("submit", function (xyz) {
  xyz.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#results");

  if (weight === " " || weight < 0 || isNaN(weight)) {
    //NaN !== NaN
    result.innerHTML = `Please provide a valid weight`;
  } else if (height === " " || height < 0 || isNaN(height)) {
    result.innerHTML = `Please provide a valid height`;
  } else {
    //BMI formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display result
    result.innerHTML = `<div>YOur BMI is ${bmi}</div>`;
  }
});
