
// check the logic and various variables to see if the variables is red, green, yellow

// Conditions for winning the rock paper scissors game. Rocks > Scissors, Scissors > Paper, Paper > Rocks

var guessAttempt = [] // global variable(Slot in the value) 
var noOfUserWins = 0
var noOfUserLoses = 0 
var noOfComputerWins = 0 
var noOfComputerLoses = 0
var userName = ''
var main = function (input) {
    myOutputValue = 'Key in your Username to begin the RPS Game'
    var myOutputValue 
    userName = input
    checkUsername(userName)
    myOutputValue = 'Enter Either "Rock", "Paper", "Scissors"'
    var gameuserInput = input
    checkInput(userInput)
    var computerRPS = computerGenerate() // computer generated output
    guessAttempt.push(input)
    if(gameuserInputuserInput == computerRPS) {
        myOutputValue = 'Draw' + 'User have key in' + gameuserInputuserInput + 'Computer Generate Value is:' + computerRPS 
    }
    else if (gameuserInputuserInput == 'Rock' && computerRPS == 'Scissors' || gameuserInputuserInput == 'Scissors' && computerRPS == 'Paper' ||  gameuserInputuserInput == 'Paper' && computerRPS == 'Rock') {
        myOutputValue = 'You have won: you have input:' + gameuserInputuserInput + 'Computer Input Value is:' + computerRPS
        noOfUserWins += 1
        noOfComputerLoses += 1
    }
    else {
        myOutputValue = 'You have lost you have input:' + gameuserInputuserInput + 'Computer Input Value is:' + computerRPS
        noOfUserLoses += 1
        noOfComputerWins += 1
        
    }

  return myOutputValue <br> 'this is ur current performance:' + userName + 'your win count is:' + noOfUserWins + 'your lose count is:' + noOfUserLoses   ;

};

var computerGenerate = function(){
    var Gamechoices = ['Rock', 'Paper', 'Scissors']
    var randomNum = (Math.random()*Gamechoices.length) // multiply the length of the array (get a value)
    var randomWordingInt = Math.floor(randomNum) // floor it down to a whole number
   if (randomWordingInt == 0 ) {
        Gamechoices[randomWordingInt] // 0 = Rock
        return Gamechoices
    }
    else if(randomWordingInt == 1) {
        Gamechoices[randomWordingInt] // 1 = Rock
        return Gamechoices
    }
    else if(randomWordingInt == 2) { // Scissors
        Gamechoices[randomWordingInt]
        return Gamechoices
    }

}


var checkUsername = function(input1) {
    var userNamePromp = ''
    if (input1 == "" || input1 != String)
    {
        userNamePromp = 'Please Key In A Proper Username such as Eg. Kai'
    }
    return userNamePromp
}

var checkInput = function(input) { // input validation 
    var ErrorOut = '' 
        if (input != "Scissors" || input != 'Rock' || input != 'Paper'){

            ErrorOut = 'Please Key in Either "Rock", "Paper", Or "Scissors"'
        }
    return ErrorOut
}
