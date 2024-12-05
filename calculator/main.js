const btns = document.querySelectorAll(".btns");
const equalsBtn = document.querySelector("#equals");
const backSpaceBtn = document.querySelector("#back-space");
const clearBtn = document.querySelector("#clear-bttn");
const historyDisplay = document.querySelector("#history");
const screenDisplay = document.querySelector("#screen");

let history = JSON.parse(localStorage.getItem("history")) || [];

let arethmeticPlan = localStorage.getItem("plan") || "";

// save history
function save() {
  history.slice(5);
  localStorage.setItem("history", JSON.stringify(history));
  localStorage.setItem("plan", arethmeticPlan);
}

// show history
function showHistory() {
  historyDisplay.innerText = "";
  history.forEach((item) => {
    historyDisplay.innerText += `${item} \n`;
  });
}

// buttons handeler
function btnsHandeler(event) {
  const value = event.target.dataset.value;
  if (value != "0") {
    arethmeticPlan += value;
    screenDisplay.innerText = arethmeticPlan;
    save();
  }
}

// back space (delete a charecter) and clear all charecters
function backSpaceHandeller() {
  arethmeticPlan = arethmeticPlan.slice(0, -1);
  save();
  if (arethmeticPlan) {
    screenDisplay.innerText = arethmeticPlan;
  } else {
    screenDisplay.innerText = "0";
  }
}
function clearHandeler() {
  arethmeticPlan = "";
  screenDisplay.innerText = "0";
  history = [];
  save();
  showHistory();
}

// equals Handeler and get result
function equalsHandeler() {
  const result = eval(arethmeticPlan);
  history.push(arethmeticPlan);
  screenDisplay.innerText = result;
  arethmeticPlan = result;
  showHistory();
  save();
}

window.addEventListener("DOMContentLoaded", () => {
  showHistory();
  screenDisplay.innerText = arethmeticPlan ? arethmeticPlan : "0";
  btns.forEach((item) => item.addEventListener("click", btnsHandeler));
  backSpaceBtn.addEventListener("click", backSpaceHandeller);
  clearBtn.addEventListener("click", clearHandeler);
  equalsBtn.addEventListener("click", equalsHandeler);
});
