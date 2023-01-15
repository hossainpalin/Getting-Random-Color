const input = document.querySelector("#inp");
const color = document.querySelector(".color-container");
const bodyColor = document.querySelector("body");
const btn = document.querySelector("#btn");

// Generate random color
btn.addEventListener("click", () => {
  const hexColor = `#${Math.random().toString(16).slice(2, 8)}`;
  color.style.backgroundColor = hexColor;
  bodyColor.style.backgroundColor = hexColor;
  input.value = hexColor;
});

// Assign color with input
input.addEventListener("input", () => {
  color.style.backgroundColor = input.value;
  bodyColor.style.backgroundColor = input.value;
});

// Clear input value after window refresh
window.onload = function () {
  input.value = "";
};
