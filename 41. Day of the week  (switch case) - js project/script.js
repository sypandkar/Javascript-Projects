//selectors
let date = new Date(); //don't forget parenthesis.
let xyz = date.getDay(); //don't forget camelcase.

//created two new names
let nameOfDay;
let quote;

switch (xyz){
  case 0:
  nameOfDay = 'Sunday';
  quote = 'Day of relaxation';
  break;

  case 1:
  nameOfDay = 'Monday';
  quote = 'Day of practice';
  break;

  case 2:
  nameOfDay = 'Tuesday';
  quote = 'Day of practice';
  break;

  case 3:
  nameOfDay = 'Wednesday';
  quote = 'Day of practice';
  break;

  case 4:
  nameOfDay = 'Thursday';
  quote = 'Day of practice';
  break;

  case 5:
  nameOfDay = 'Friday';
  quote = 'Day of practice';
  break;
}


let abc = document.getElementById('weekday');
abc.innerHTML = `${nameOfDay}`;

let plan = document.getElementById('phrase');
plan.innerHTML = `${quote}`;



