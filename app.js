var buttonClick = document.querySelector(".btn-translate");
var textInput = document.querySelector(".text-input");
var textOutput = document.querySelector(".text-output");

// Server URL
var url = "https://api.funtranslations.com/translate/minion.json";

// Add the text in input to URL
function editURL(text) {
    return url + "?text=" + text;
}

// Handling errors 
function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something went wrong. Can't reach the server. Try again.");
}

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
    
        .catch(errorHandler)
}


buttonClick.addEventListener ("click", clickListener);