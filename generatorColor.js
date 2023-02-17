const btn = document.getElementById("btn");
const body = document.body;
const genenerator = () => {
  const str = "abcdef123456789";
  let hex = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    hex += str[index];
  }
  return "#" + hex;
};
btn.onclick = function () {
  body.style.backgroundColor = genenerator();
};
