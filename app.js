let color = "ABCDEF1234567890";
let getBody = document.querySelector("body");
let randomChar1 = "#";
let randomChar2 = "#";

function randomColorGenerator() {
  randomChar1 = "#";
  randomChar2 = "#";
  for (let i = 0; i < 6; i++) {
    randomChar1 += color[Math.floor(Math.random() * color.length)];
    randomChar2 += color[Math.floor(Math.random() * color.length)];
  }
  getBody.style.background = `linear-gradient(-30deg,${randomChar1},${randomChar2})`;
}
