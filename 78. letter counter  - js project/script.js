let button = document.getElementById("btn");

button.addEventListener("click", function () {
  let word = document.getElementById("str").value;
  let count = word.length;
  let outputDiv = document.getElementById("output");

  outputDiv.innerHTML = `<h4>The Length is: ${count}</h4>`;
});
