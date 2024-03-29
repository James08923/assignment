function calculateValues() {
    // Get the input value
    var number = parseInt(document.getElementById("numberInput").value);

    // Display the number
    document.getElementById("number").innerText = "Number: " + number;

    // Calculate and display round off value
    document.getElementById("roundOff").innerText = "Round off value: " + Math.round(number);

    // Calculate and display floor value
    document.getElementById("floorValue").innerText = "Floor value: " + Math.floor(number);

    // Calculate and display ceil value
    document.getElementById("ceilValue").innerText = "Ceil value: " + Math.ceil(number);
}





function calculateValues() {
    // Get the input value
    var number = parseFloat(document.getElementById("numberInput").value);

    // Display the number
    document.getElementById("number").innerText = "Number: " + number;

    // Calculate and display round off value
    document.getElementById("roundOff").innerText = "Round off value: " + Math.round(number * 100) / 100;

    // Calculate and display floor value
    document.getElementById("floorValue").innerText = "Floor value: " + Math.floor(number);

    // Calculate and display ceil value
    document.getElementById("ceilValue").innerText = "Ceil value: " + Math.ceil(number);
}




function calculateAbsoluteValue() {
    // Get the input value
    var number = parseFloat(document.getElementById("numberInput").value);

    // Calculate absolute value
    var absoluteValue = Math.abs(number);

    // Display the absolute value
    document.getElementById("absoluteValue").innerText = "Absolute Value: " + absoluteValue;
}



function rollDice() {
    // Generate a random number between 1 and 6 for the dice
    var diceValue = Math.floor(Math.random() * 6) + 1;

    // Display the dice value
    document.getElementById("diceValue").innerText = "Dice Value: " + diceValue;
}



function tossCoin() {
    // Generate a random number between 0 and 1 for the coin toss
    var tossResult = Math.random();

    // If the result is less than 0.5, it's heads, otherwise it's tails
    var coinValue = (tossResult < 0.5) ? "Heads" : "Tails";

    // Display the coin value
    document.getElementById("coinValue").innerText = "Coin Value: " + coinValue;
}


    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the random number
    document.getElementById("randomNumber").innerText = "Random Number: " + randomNumber;




        // Get the user input
        var userInput = document.getElementById("weightInput").value.trim().toLowerCase();
    
        // Regular expression to match the weight format
        var regex = /^(\d+(\.\d+)?)\s*(kg|kilograms?)?$/;
    
        // Match the user input against the regular expression
        var match = userInput.match(regex);
    
        // If a match is found
        if (match) {
            // Extract the weight value
            var weight = parseFloat(match[1]);
    
            // Display the weight
            document.getElementById("weight").innerText = "Weight: " + weight + " kgs";
        } else {
            // Display an error message for invalid input
            document.getElementById("weight").innerText = "Invalid input. Please enter weight in the format: 50, 50kgs, 50.2kgs, or 50.2kilograms";
        }




    
            // Generate a random secret number between 1 and 10
            var secretNumber = Math.floor(Math.random() * 10) + 1;
        
            // Get the user input
            var userInput = parseInt(document.getElementById("userInput").value);
        
            // Check if the user input equals the secret number
            if (userInput === secretNumber) {
                // If user guessed correctly, congratulate
                document.getElementById("result").innerText = "Congratulations! You guessed the secret number.";
            } else {
                // If user guessed incorrectly, provide feedback
                document.getElementById("result").innerText = "Sorry, the secret number was " + secretNumber + ". Try again!";
            }





        
