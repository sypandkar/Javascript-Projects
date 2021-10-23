//SELECTORS
let submitButton = document.getElementById("send");
let resetButton = document.getElementById("reset");
let form = document.getElementById("form");

//Eventlistener 1 (for submit)
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
//EVENTLISTENER 2nd ( for reset button)
resetButton.addEventListener("click", function () {
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  let address = document.getElementById("address");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  firstName.value = " ";
  lastName.value = " ";
  email.value = " ";
  address.value = " ";
  message.value = " ";
});

//EVENTLISTENER 3rd (for send button)
submitButton.addEventListener("click", function () {
  let message = document.getElementById("message");
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  let address = document.getElementById("address");
  let email = document.getElementById("email");

  // localStorage.clear();

  firstName = firstName.value;
  localStorage.setItem("firstname", firstName);

  lastName = lastName.value;
  localStorage.setItem("lastname", lastName);

  address = address.value;
  localStorage.setItem("address", address);

  email = email.value;
  localStorage.setItem("email", email);

  message = message.value;
  localStorage.setItem("message", message);
});
