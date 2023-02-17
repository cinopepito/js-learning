const btn = document.getElementById("btn");

let str = "javascript is awesome";
let newStr = "";
const generator = () => {
  for (let i = 0; i < str.length; i++) {
    let index = Math.floor(Math.random() * str.length);
    newStr += str[index];
  }
  return newStr;
};
