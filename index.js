document.addEventListener("DOMContentLoaded", () => {
  // Function to animate numbers
  function loopNumber(id, maxValue, delay) {
    const element = document.getElementById(id);
    let count = 0;
    if (element) {
      const interval = setInterval(() => {
        if (count <= maxValue) {
          element.innerHTML = `${count}`;
          count++;
        } else {
          clearInterval(interval);
        }
      }, delay);
    }
  }

  loopNumber("numberloop1", 10, 70);
  loopNumber("numberloop2", 100, 10);
  loopNumber("numberloop3", 20, 50);
});
function mdown(id) {
  id.style.fontWeight = "bold";
  id.style.backgroundColor = "black";
  id.style.textShadow = "0 0 5px white, 0 0 15px white";
}
function mup(id) {
  id.style.fontWeight = "normal";
  id.style.textShadow = "none";
}
