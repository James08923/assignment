alert("assignment 20");




let studentNamesLiteral = [];

let studentNamesObject = new Array();

let stringsArray = ['apple', 'banana', 'cherry'];

let numbersArray = [1, 2, 3, 4, 5];

let booleanArray = [true, false, true, true];

let mixedArray = ['apple', 1, true, null, undefined];

let educationQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

console.log("Education Qualifications in Pakistan:");
educationQualifications.forEach(qualification => {
    console.log(qualification);
});




let studentNames = ["John", "Alice", "Bob"];

let scores = [430, 380, 450];

function calculatePercentage(score) {
    return (score / 500) * 100;
}

console.log("Student Scores and Percentages:");
for (let i = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]} scored ${scores[i]} out of 500, Percentage: ${calculatePercentage(scores[i])}%`);
}





 let colors = ["red", "green", "blue"];

 document.write("<b>Initial array:</b> " + colors.join(", ") + "<br><br>");
 let colorToAddStart = prompt("Enter a color to add to the beginning:");
 colors.unshift(colorToAddStart);
 document.write("<b>Array after adding color to the beginning:</b> " + colors.join(", ") + "<br><br>");


 let colorToAddEnd = prompt("Enter a color to add to the end:");
 colors.push(colorToAddEnd);
 document.write("<b>Array after adding color to the end:</b> " + colors.join(", ") + "<br><br>");

 colors.unshift("purple", "yellow");
 document.write("<b>Array after adding two colors to the beginning:</b> " + colors.join(", ") + "<br><br>");

 colors.shift();
 document.write("<b>Array after deleting the first color:</b> " + colors.join(", ") + "<br><br>");

 colors.pop();
 document.write("<b>Array after deleting the last color:</b> " + colors.join(", ") + "<br><br>");

 
 let positionToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
 let colorToAdd = prompt("Enter the color name:");
 colors.splice(positionToAdd, 0, colorToAdd);
 document.write("<b>Array after adding color at a user-defined position:</b> " + colors.join(", ") + "<br><br>");


 let positionToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
 let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
 colors.splice(positionToDelete, numberOfColorsToDelete);
 document.write("<b>Array after deleting color(s) from user-defined position:</b> " + colors.join(", ") + "<br><br>");




let studentScores = [85, 92, 78, 90, 88];


studentScores.sort(function(a, b) {
    return a - b;
});


console.log("Sorted student scores in ascending order:");
console.log(studentScores);





let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

let selectedCities = cities.slice(0, 3);

console.log("Selected cities:");
console.log(selectedCities);






var arr = ["This", "is", "my", "cat"];

var singleString = arr.join(' ');

console.log(singleString);







let fifoArray = [];

fifoArray.push("Value1");
fifoArray.push("Value2");
fifoArray.push("Value3");

let value1 = fifoArray.shift(); 
let value2 = fifoArray.shift(); 
let value3 = fifoArray.shift();

console.log("Values retrieved in FIFO order:");
console.log(value1);
console.log(value2);
console.log(value3); 







let lifoArray = [];

lifoArray.push("Value1");
lifoArray.push("Value2");
lifoArray.push("Value3");

let value3 = lifoArray.pop();
let value2 = lifoArray.pop();
let value1 = lifoArray.pop();

console.log("Values retrieved in LIFO order:");
console.log(value3);
console.log(value2);
console.log(value1);





// Initialize an array
var arr = ["This", "is", "my", "cat"];

// Use the join method to create a single string
var resultString = arr.join(" ");

// Display the result string
document.write("<p>" + resultString + "</p>");







let multiDimArray = [];

multiDimArray.push([]);
multiDimArray.push([]);
multiDimArray.push([]);

multiDimArray[0].push(1);
multiDimArray[0].push(2);
multiDimArray[0].push(3);

multiDimArray[1].push("apple");
multiDimArray[1].push("banana");

multiDimArray[2].push(true);
multiDimArray[2].push(false);






let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



1 2 3
4 5 6
7 8 9




