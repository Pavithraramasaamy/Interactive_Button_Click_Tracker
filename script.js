function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

const button = document.getElementById("clickBtn");
const display = document.getElementById("countDisplay");

button.addEventListener("click", () => {
  const currentCount = counter();
  display.innerText = currentCount;
});
