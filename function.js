//function to show name
// function showname(name) {
//   console.log("my name is" + name);
// }
// showname(" alex");
// showname(" Bruno");

// function calculateAge(birthYear) {
//    return 2023 - birthYear;
// }
// calculateAge(1990);
// function retirement(name,birthYear){
//     let age = 2023 -birthYear
//     let result = 65 - age;
//     return result + name;
// }
// retirement('bobo',1990)
// retirement()
// calculateAge(1990);
//function to make a simple calculation
// function calcul(a, b) {
//   console.log(a - b);
// }
// calcul(10, 2);
//function with parameter are better than simple function
// function dogYears(yourAge) {
//   // run your code here
//   //return is used to kill the function
//   return yourAge * 7;
// }
// var age = 26;
// var dog = dogYears(age);

// document.write("If you were a dog, you'd be " + dog + " years old");

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
//aray that calculate the sum of an element
// const calculateSum = (arr) => {
//   for (const ele of arr) {
//     sum += ele;
//   }
//   return sum;
// };
// console.log(calculateSum(numbers));
// //let's use map method to calculate the square of a number
// const squaredNumber = numbers.map((n)=>n**2);
// console.log(squaredNumber);
// //let'smake sum of element with higher order function
// const sumNumbers = numbers.reduce((acc,cur)=>acc+cur);
// console.log(sumNumbers);
// const evenNumber = numbers.map((ele)=>ele%2==0);
// console.log(evenNumber)

function calculateTip() {
  //store the dta of input
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  //quick valiadattion
  if (billAmount == "" || serviceQuality == 0) {
    window.alert("please enter some value to get this baby up and running");
    return; //this will prevent the function from continuing
  }

  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  //do some math
  var total = (billAmount * serviceQuality) / numPeople;
  total = total.toFixed(2);
  window.alert(total);
}
//check to see if this input is empty or equal to 1

//hide the tip amount
document.getElementById("totalTip").style.display = "none";
//building the button to call a function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
