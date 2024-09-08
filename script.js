"use strict";

const ratingButtons = document.querySelectorAll(".rating-buttons");
let selectedRate;

// storing the selected rating
function storeRate() {
  selectedRate = this.textContent
};

// adding click listener to rating buttons
Array.from(ratingButtons).forEach(button => 
  button.addEventListener("click", storeRate)
);

// click on submit button takes effect only if a rating button is selected
const submitButton = document.getElementById("submit");

function submitRate() {
  if (selectedRate) {
    localStorage.setItem("selectedRate", selectedRate);
    location.href = "thankyou.html";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const displaySelectedRate = document.getElementById("display-selected-rate");
  if (displaySelectedRate) {
    displaySelectedRate.textContent = localStorage.getItem("selectedRate");
  }
});

// submitting the selected rate
submitButton.addEventListener("click", submitRate);