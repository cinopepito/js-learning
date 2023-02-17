//let's select all the input involved in the calcul of the total bill after eating at the restarant

function calculTip() {
  const billAmount = document.getElementById("billAmount").value;
  const serviceQuality = document.getElementById("serviceQuality").value;
  const numPeople = document.getElementById("numPeople").value;

  //let's make condition in case customer enter wrong value
  if (billAmount === "" || serviceQuality === 0) {
    window.alert(
      "please enter value into the input to make this baby app wake an run"
    );
    return;
  }
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
  }

  let total = (billAmount * serviceQuality) / numPeople;

  window.alert(total.toFixed(2));
}
document.getElementById("btn").onclick = function () {
  calculTip();
};
//how to use set intervall function in javascript
let count = 0;
let interval = setInterval(() => {
  console.log(count);
  count = count + 1;
}, 1000);
//how to clear the intervall in javascript
clearInterval(interval);
