//let's select all the input involved in the calcul of the total bill after eating at the restarant

function calculTip() {
  const billAmount = document.getElementById("billAmount").value;

  const serviceQuality = document.getElementById("serviceQuality").value;

  const numPeople = document.getElementById("numPeople");

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

  let total = (billAmount * serviceQuality) / 1;

  window.alert(total.toFixed(2));
}
document.getElementById("btn").onclick = function () {
  calculTip();
};
