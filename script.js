const textInput = document.querySelector("#text-input");
const count = document.querySelector("#count");
const clock = document.querySelector("#clock");
const minimum = document.querySelector("#minimum");
const maximum = document.querySelector("#maximum");
const result = document.querySelector("#result");

textInput.addEventListener("input", () => {
  const text = textInput.value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  count.textContent = `${text.length} characters · ${words} words`;
});

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

document.querySelector("#pick-button").addEventListener("click", () => {
  const min = Number(minimum.value);
  const max = Number(maximum.value);
  if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
    result.textContent = "Enter whole numbers with minimum ≤ maximum.";
    return;
  }
  result.textContent = `Your number: ${Math.floor(Math.random() * (max - min + 1)) + min}`;
});
