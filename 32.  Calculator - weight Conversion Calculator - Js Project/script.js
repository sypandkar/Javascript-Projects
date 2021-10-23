const convertToKg = () => {
  const weightInPound = document.getElementById("weight-in-pound").value;

  if (weightInPound < 0) {
    alert("Enter valid weight");
    return;
  }

  const weightInKg = weightInPound * 0.45;

  document.getElementById("result").innerHTML = ` ${weightInKg}kg`;
};
