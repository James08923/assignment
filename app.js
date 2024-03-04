alert("Assignment no 19");


let studentNamesLiteral = [];
let studentNamesObject = new Array();
let stringsArray = ["apple", "banana", "cherry"];
let numbersArray = [1, 2, 3, 4, 5];
let booleanArray = [true, false, true];
let mixedArray = ["John", 25, true, "apple"];
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display in the browser
document.write("<h3>Education Qualifications in Pakistan:</h3>");
document.write("<ul>");

for (let i = 0; i < educationQualifications.length; i++) {
    document.write("<li>" + educationQualifications[i] + "</li>");
}

document.write("</ul>");







let studentNames = ["ahmed", "zain", "muskan"];
let studentScores = [420, 480, 350];


const totalMarks = 500;



document.write("<h3>Student Scores and Percentages:</h3>");
document.write("<table border='1'>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");



for (let i = 0; i < studentNames.length; i++) {
    const percentage = (studentScores[i] / totalMarks) * 100;
    document.write("<tr>");
    document.write("<td>" + studentNames[i] + "</td>");
    document.write("<td>" + studentScores[i] + "</td>");
    document.write("<td>" + percentage.toFixed(2) + "%</td>");
    document.write("</tr>");
}

document.write("</table>");








let colors = ["Red", "Green", "Blue"];


document.write("<h3>Original Array:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


let userColorStart = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(userColorStart);


document.write("<h3>After adding color to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


let userColorEnd = prompt("Enter a color to add to the end of the array:");
colors.push(userColorEnd);


document.write("<h3>After adding color to the end:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


colors.unshift("Purple", "Orange");


document.write("<h3>After adding two more colors to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.shift();


document.write("<h3>After deleting the first color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


colors.pop();


document.write("<h3>After deleting the last color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


let userIndex = prompt("Enter the index where you want to add a color:");
let userColorAdd = prompt("Enter the color name to add at that index:");
colors.splice(userIndex, 0, userColorAdd);


document.write("<h3>After adding color at a user-defined index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");


let userDeleteIndex = prompt("Enter the index from which you want to delete color(s):");
let deleteCount = prompt("Enter the number of colors you want to delete:");
colors.splice(userDeleteIndex, deleteCount);


document.write("<h3>After deleting color(s) at a user-defined index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");













// let studentScores = [78, 92, 64, 85, 97];
//  


document.write("<h3>Original Student Scores:</h3>");
document.write("<p>" + studentScores.join(", ") + "</p>");


studentScores.sort(function(a, b) {
    return a - b;
});


document.write("<h3>Sorted Student Scores (Ascending Order):</h3>");
document.write("<p>" + studentScores.join(", ") + "</p>");








let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

document.write("<h3>Original City Names:</h3>");
document.write("<p>" + cities.join(", ") + "</p>");


let selectedCities = cities.slice(1, 4);

document.write("<h3>Selected Cities:</h3>");
document.write("<p>" + selectedCities.join(", ") + "</p>");









// Initialize an array
var arr = ["This", "is", "my", "cat"];

// Use the join method to create a single string
var resultString = arr.join(" ");

// Display the result string
document.write("<p>" + resultString + "</p>");
