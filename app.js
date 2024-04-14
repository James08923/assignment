var now = new Date();
var datetimeElement = document.getElementById('datetime');
// datetimeElement.textContent = now.toLocaleString();


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var currentMonth = months[now.getMonth()];
alert("Current month is: " + currentMonth);


var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var currentDayIndex = now.getDay();
var currentDayAbbreviation = days[currentDayIndex];
alert("Today is: " + currentDayAbbreviation);


var now = new Date();
var currentDayIndex = now.getDay();

if (currentDayIndex === 0 || currentDayIndex === 6) {
    alert("It's Fun day!");
} else {
    alert("It's Fun day. Keep going!");
}


var now = new Date();
            var currentDate = now.getDate();

            if (currentDate <= 15) {
                alert("First fifteen days of the month");
            } else {
                alert("Last days of the month");
            }


var currentDate = new Date();


var minutesSinceEpoch = currentDate.getTime() / (1000 * 60);


console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);


var now = new Date();
var currentHour = now.getHours();

if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}


var laterDate = new Date(2020, 11, 31);


console.log("Later Date:", laterDate);


var ramadanStartDate = new Date(2015, 5, 18); 


var currentDate = new Date();

var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();


var daysSinceRamadanStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert("Number of days past since 1st Ramadan: " + daysSinceRamadanStart);



        var beginningOf2015 = new Date(2015, 0, 1, 0, 0, 0);

        var referenceDate = new Date();

        var secondsElapsed = Math.floor((referenceDate - beginningOf2015) / 1000);

        document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed);


       
        var currentDate = new Date();

      
        var currentHours = currentDate.getHours();

   
        currentDate.setHours(currentHours + 1);


        document.write("Updated Date Object: " + currentDate);


         var currentDate = new Date();

         currentDate.setFullYear(currentDate.getFullYear() - 100);

         alert("Date 100 years back: " + currentDate);



        var age = prompt("Please enter your age:");

        var currentYear = new Date().getFullYear();
        var birthYear = currentYear - parseInt(age);

        document.write("Your birth year is: " + birthYear);





        var customerName = prompt("Enter customer name:");
        var currentMonth = prompt("Enter current month:");
        var numberOfUnits = parseFloat(prompt("Enter number of units:"));
        var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
        var latePaymentSurchargeRate = parseFloat(prompt("Enter late payment surcharge rate (in %):"));

  
        var netAmountPayable = numberOfUnits * chargesPerUnit;

    
        var latePaymentSurcharge = (latePaymentSurchargeRate / 100) * netAmountPayable;

        var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

        netAmountPayable = netAmountPayable.toFixed(2);
        latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
        grossAmountPayable = grossAmountPayable.toFixed(2);

        document.write("<h2>K-Electric Bill</h2>");
        document.write("<p>Customer Name: " + customerName + "</p>");
        document.write("<p>Current Month: " + currentMonth + "</p>");
        document.write("<p>Number of Units: " + numberOfUnits + "</p>");
        document.write("<p>Charges Per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
        document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable + "</p>");
        document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge + "</p>");
        document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable + "</p>");
