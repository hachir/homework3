var computerGuess;
var userGuesslog = [];
var attempts = 0;
var maxGuesses = 10;

function gameEnded() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("easyBtn").style.display = "none";
    document.getElementById("hardBtn").style.display = "none";
    document.getElementById("inputBox").setAttribute("readonly","readonly");
    userGuesslog = [];
    console.log("userlog", userGuesslog);
    document.getElementById("guesslog").innerHTML = userGuesslog;
    document.getElementById("inputBox").value = "";
}

function easymode() {
    maxGuesses = 10;
    document.getElementById("easyBtn").className = "activeButton";
    document.getElementById("hardBtn").className = "";

}

function hardmode() {
    maxGuesses = 5;
    document.getElementById("hardBtn").className = "activeButton";
    document.getElementById("easyBtn").className = "";
}

function newGame() {
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
  //console.log(computerGuess);  
    document.getElementById("newGameButton").style.display = "none";
}

function compareGuess() {
    var userGuess = " " + document.getElementById("inputBox").value;
    //console.log (userGuess);
    userGuesslog.push(userGuess);
    //console.log (userGuesslog);
    document.getElementById("guesslog").innerHTML = userGuesslog;
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    if (userGuesslog.length < maxGuesses) {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "your guess is too high";
            document.getElementById("inputBox").value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "your guess is too low";
            document.getElementById("inputBox").value = "";
        } else {
            document.getElementById("textOutput").innerHTML = "win! you got it in "+attempts+ "attempts";
            document.getElementById("container").style.backgroundColor="green";
            gameEnded();
        }
    } else {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "you lose!" +"<br> the number was" + computerGuess;
            document.getElementById("container").style.backgroundColor="#e82c4e";
            gameEnded();
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "you lose!" +"<br> the number was" + computerGuess;
            document.getElementById("container").style.backgroundColor="#e82c4e";
            gameEnded();
        } else {
            document.getElementById("textOutput").innerHTML = "win! you got it in "+attempts+ "attempts";
            document.getElementById("container").style.backgroundColor="green";
            gameEnded();
        }

    }


}