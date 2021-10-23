function login() {
  var uname = document.getElementById("username").value;
  var passward = document.getElementById("passward").value;

  if (uname == "sypandkar" && passward == "12345") {
    location.assign("http://127.0.0.1:5501/index2.html");
  } else {
    alert("login failed!!");
  }
}
