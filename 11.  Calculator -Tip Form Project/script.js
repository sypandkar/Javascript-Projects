// //selector
// let btn = document.getElementById("btn");

// //eventlistener
// btn.addEventListener("click", function () {
//   let billAmount = document.getElementById("bill-amount").value;
//   let tipPercentage = document.getElementById("tip-percentage").value;

//   let tipAmount = (document.getElementById("tip-amount").value = [
//     billAmount * (tipPercentage / 100),
//   ]);

//   document.getElementById("total-bill").value =
//     parseFloat(billAmount) + parseFloat(tipAmount);
// });

//what I learned in this project.
// 1) .value

//=====================================================================//

//OR YOU CAN WRITE ALSO LIKE THIS
//selector
let btn = document.getElementById("btn");

//eventListener
btn.addEventListener("click", function () {
  let billAmount = document.getElementById("bill-amount").value;
  let tipPercentage = document.getElementById("tip-percentage").value;

  let tipAmount = billAmount * (tipPercentage / 100);
  let totalBill = tipAmount + Number(billAmount);

  document.getElementById("tip-amount").value = tipAmount;
  document.getElementById("total-bill").value = totalBill;
});

///what I learned in this project.
// 1) .value
