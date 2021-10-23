//SELECTORS
let button = document.getElementById("addtodo");
let toDoContainer = document.getElementById("to-do-container");
let inputField = document.getElementById("input-field");

//EVENT LISTENERS
button.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  // paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
});

//What I learned here
// 1)document.creatElement("P") = it will generate a new paragraph
// 2).appendChild(paragraph) = it will include paragraph as a child element
