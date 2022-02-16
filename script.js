const keyUp = document.getElementById("keyUp");
const keyDown = document.getElementById("keyDown");
const mainContent = document.getElementById("mainContent");
let timer;

function scrollUp() {
  mainContent.scrollTop += 250;
}

function scrollDown() {
  mainContent.scrollTop -= 250;
}

keyUp.addEventListener("mousedown", () => {
  timer = setInterval(scrollUp, 100);
});
keyUp.addEventListener("mouseup", () => {
  if (timer) clearInterval(timer);
});

keyUp.addEventListener("mouseout", () => {
  if (timer) clearInterval(timer);
});

keyDown.addEventListener("mousedown", () => {
  timer = setInterval(scrollDown, 100);
});
keyDown.addEventListener("mouseup", () => {
  if (timer) clearInterval(timer);
});
keyDown.addEventListener("mouseout", () => {
  if (timer) clearInterval(timer);
});
