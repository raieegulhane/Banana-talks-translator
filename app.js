// Selecting all queries
var buttonClick = document.querySelector(".btn-translate");
var textInput = document.querySelector(".text-input");
var textOutput = document.querySelector(".text-output");

// Server URL
var url = "https://api.funtranslations.com/translate/minion.json";

// Function to add the text in input to URL
function editURL(text) {
    return url + "?text=" + text;
}

// For handling errors when server cannot be reached or is down
function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something went wrong. Can't reach the server. Try again.");
}

// Function that tells what to do when button is clicked 
// (processing on button click)
function clickListener () {
    // Storing the input typed by user
    var inputTxt = textInput.value;

    // fetching/calling the server for processing
    fetch(editURL(inputTxt)) 
        .then (response => response.json())
        .then (json => {
            // We only need the translated content as output
            // This is for printing output in output textbox
            var translatedOutput = json.contents.translated;
            textOutput.innerText = translatedOutput;
        })
    
        // This handles the error
        .catch(errorHandler)
}


// On click do this
buttonClick.addEventListener ("click", clickListener);