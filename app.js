var firstName = prompt("Enter your first name:");

var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome.");







function displayLength() {

    var userInput = document.getElementById("phoneModelInput").value;


    var inputLength = userInput.length;


    document.getElementById("lengthDisplay").innerText = "Length of your input: " + inputLength;
}





var word = "Pakistani";


var indexOfN = word.indexOf("n");


document.getElementById("indexDisplay").innerText = indexOfN;








var word = "Hello World";


        var lastIndex = word.lastIndexOf("l");


        document.getElementById("indexDisplay").innerText = lastIndex;







        var word = "Pakistani";

        // Find the character at the 3rd index
        var charAtIndex3 = word.charAt(3);

        // Display the result in the browser
        document.getElementById("charDisplay").innerText = charAtIndex3
