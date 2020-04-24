/*
function computeBMI() {
  //Obtain user inputs
  let height = Number(document.getElementById("height").value);
  let heightunits = document.getElementById("heightunits").value;
  let weight = Number(document.getElementById("weight").value);
  let weightunits = document.getElementById("weightunits").value;

  //Convert all units to metric
  if (heightunits == "inches") height /= 39.3700787;
  if (weightunits == "lb") weight /= 2.20462;

  console.log(heightunits, weightunits);

  //Perform calculation
  let BMI = weight / Math.pow(height, 2);

  //Display result of calculation
  document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

  let output = Math.round(BMI * 100) / 100;
  if (output < 18.5)
    document.getElementById("comment").innerText =
      "Your BMI indicates your weight is in the Underweight category for adults of your height.";
  else if (output >= 18.5 && output <= 25)
    document.getElementById("comment").innerText =
      "Your BMI indicates your weight is in the Normal category for adults of your height.";
  else if (output >= 25 && output <= 30)
    document.getElementById("comment").innerText =
      "Your BMI indicates your weight is in the Overweight category for adults of your height.";
  else if (output > 30)
    document.getElementById("comment").innerText =
      "Your BMI indicates your weight is in the Obese category for adults of your height.";
  // document.getElementById("answer").value = output;
}*/

const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const calbtn = document.querySelector(".callbtn");
const result = document.querySelector(".card-title");
const detail = document.querySelector(".card-text");

//Event Listener

heightInput.addEventListener("keyup", () => {
  let height = Number(heightInput.value);
  if (height != height) {
    alert("Please input in numbers");
  }
});
weightInput.addEventListener("keyup", () => {
  let weight = Number(weightInput.value);
  if (weight != weight) {
    alert("Please input in numbers");
  }
});
calbtn.addEventListener("click", calculateBmi);

//Functions

function calculateBmi(e) {
  let height = Number(heightInput.value);
  let weight = Number(weightInput.value);
  let heightUnit = document.querySelector("#heightunits").value;
  let weightUnit = document.querySelector("#weightunits").value;

  //Convert units to metric
  if (heightUnit == "inches") height /= 39.3700787;
  if (weightUnit == "lb") weight /= 2.20462;

  console.log(heightUnit, weightUnit);

  //Calculation

  let BMI = weight / Math.pow(height, 2);

  //Show the result
  result.innerText = Math.round(BMI * 100) / 100;
  let output = Math.round(BMI * 100) / 100;
  if (output < 18.5) {
    detail.innerText =
      "Your BMI indicates your weight is in the Underweight category for adults of your height.";
  } else if (output >= 18.5 && output <= 25) {
    detail.innerText =
      "Your BMI indicates your weight is in the Normal category for adults of your height.";
  } else if (output >= 25 && output <= 30) {
    detail.innerText =
      "Your BMI indicates your weight is in the Overweight category for adults of your height.";
  } else if (output > 30) {
    detail.innerText =
      "Your BMI indicates your weight is in the Obese category for adults of your height.";
  }
}
