
// get the values form the page
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter an integer!")
    }

}

//gene3rate numbers from startValue to the endValue
function generateNumbers(sValue, eValue) {

    let numbers = [];
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }
    return numbers;
}

//display even numbers in BOLD
function displayNumbers(numbers) {
    let templateRows = "";
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        let className = "even";
        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class= "${className}">${number}</td></tr>`;
        document.getElementById("results").innerHTML = templateRows;
    }

}