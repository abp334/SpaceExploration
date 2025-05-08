function mdown(id) {
  id.style.fontWeight = "bold";
  id.style.backgroundColor = "black";
  id.style.textShadow = "0 0 5px white, 0 0 15px white";
}
function mup(id) {
  id.style.fontWeight = "normal";
  id.style.textShadow = "none";
}
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Jobs";
  }, 0);
  setTimeout(() => {
    text.textContent = "Internships";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Research";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);
