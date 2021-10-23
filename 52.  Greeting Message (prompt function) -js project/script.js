var instruction = prompt(`Enter your name here`);
var today = new Date();
var hours = today.getHours();

if (hours <= 12) document.write(` Good Morning ${instruction} !!!!"`);
else if (hours <= 18) document.write(`Good Afternoon ${instruction} !!!!`);
else document.write(`Good Night ${instruction} !!!!`);
