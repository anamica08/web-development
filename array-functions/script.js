function validateInput(input) {
    let regex = /^[-]?[0-9]+(,[-]?[0-9]+)*$/g;
    let result = (regex.test(input));
    return result;
}


function calculateRMS() {
    document.getElementById("errorMessage").innerHTML = "";
    var inputTextBox = document.getElementById("arrayOfNumbers");
    var arrayOfNumbers = inputTextBox.value;
    //console.log(arrayOfNumbers);
    if (validateInput(arrayOfNumbers)) {

        /*Obtaining array of numbers*/
        let strArray = arrayOfNumbers.split(",");
        let array = strArray.map(str => parseInt(str));



        /*Filter to pull out all negative numbers */
        let nArray = array.filter(function(num) {
            if (num < 0) { return num; }
        });

        /*Filter to pull out all positive numbers */
        let pArray = array.filter(function(num) {
            if (num >= 0) { return num; }
        });




        /*Function to return the sum of the square of the values passed in the array*/
        function square(num) {
            return num * num;
        }
        let psquare = pArray.map(square, this);
        let nsquare = nArray.map(square, this);



        /**Reduce to Sum*/
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let pSquareSum = psquare.reduce(reducer, 0);
        let nSquareSum = nsquare.reduce(reducer, 0);



        /*RMS calculation and Printing output */

        var pRMS = Math.sqrt(pSquareSum / pArray.length);
        if (isNaN(pRMS)) {
            pRMS = 0;
        }
        document.getElementById("pRMS").value = pRMS.toFixed(4);

        var nRMS = Math.sqrt(nSquareSum / nArray.length);
        if (isNaN(nRMS)) {
            nRMS = 0;
        }
        document.getElementById("nRMS").value = nRMS.toFixed(4);

        document.getElementById("RMS").value = (pRMS + nRMS).toFixed(4);
        inputTextBox.value = "";

    } else {

        document.getElementById("pRMS").value = "";
        document.getElementById("nRMS").value = "";
        document.getElementById("RMS").value = "";
        document.getElementById("errorMessage").innerHTML = "Error!!Enter Comma Separated Numbers only.";

    }


}