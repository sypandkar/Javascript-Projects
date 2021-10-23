function computeloan() {
  const loanAmount = document.querySelector("#loan-amount").value;
  const interestRate = document.querySelector("#interest-rate").value;
  const months = document.querySelector("#months-to-pay").value;

  const interestAmount = (loanAmount * (interestRate / 100)) / months;
  let totalAmount = (loanAmount / months + interestAmount).toFixed(2);
  //for calculating monthly payment

  document.querySelector(
    "#payment"
  ).innerHTML = `Your monthly payment = Rs. ${totalAmount}`;
}

//what I learned here
//1) .toFixed(2) = it will show the payment amount upto two decimal points. => ex. 550.50
//use querySelector instead of getElementById because the output of totalAmount was shown with string concatination.(i.e it was considering the input values as a strings ex. 55050)
//HTML atributes =
//1) loanAmount= min="1"; max="5000000";
//2) INTEREST RATE: % = "10"; step = ".1";
//3) MONTHS TO PAY: value = "1"; step = "1";

//Function defined in html = onchange="computeloan()"
