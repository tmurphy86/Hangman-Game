// console.log(chance.word());

//waiting for user to click the begin button to start game
// var waitingForAny = false;
// $(document).ready(function(){})
var globeWord;
var arrayGuess = [ ];      // Stored array all guessed letters
var globeAnswer = [ ];    //answers right so far
var guessLeft;               //number of guess left
var scoreTotals = 0;           //total number of wins
var letters = "abcdefghijklmnopqrstuvwxyz";
var globeWin = 0;

//images for hanging
var pix = new Array();

pix[0] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H10.gif"
pix[1] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H6.gif"
pix[2] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H4.gif"
pix[3] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H2.gif"
pix[4] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H1.gif"
pix[5] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/G3.gif"
pix[6] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/G1.gif"

//submit via enter, if game hasn't started yet it will kickoff myJS which will myStart
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        myJsFunction();
        }
    }

//waiting for input
// document.getElementById("restart").onclick = myStart();

function myStart(){
    console.log("Start Page")

    // Setting variable for a new game
    guessLeft = 7;        // Lives
    arrayGuess=[];
    globeWin = 0;


    //cleaning old html from a refresh
    document.getElementById("missed").innerHTML = arrayGuess;
    document.getElementById("left").innerHTML =  "Total Guesses Left: 6";

    //word for hanging the space man
    var words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];

    // random word from words array
    var word = words[Math.floor(Math.random()*words.length)];

    //storing selected word into global var
    globeWord=word;

    //Setting up the blank array for the length of the word
    var answerWord = [];
    for (var i = 0; i < word.length; i++) {
            answerWord[i]="_";
        }

    //global var
    globeAnswer = answerWord;
    console.log(globeWord);

    document.getElementById("wordDash").innerHTML = globeAnswer;
    document.getElementById("hangPix").src = pix[6];

}


//Input value from input field of html
function myJsFunction(){
    var text = document.getElementById('input1').value;

    //Clear value in input
    document.getElementById('input1').value = "";

      // Converts the user's answer to lowercase
    var textLower = text.toLowerCase();

    //checks value to ensure it is a valid input
    if(textLower.length === 1 && letters.includes(textLower)===true){
        checkGuess(textLower);

     } else {
             alert('Invalid Input');
            }
    }


function checkGuess(letterPass){
  if (typeof globeWord === 'undefined') {
        myStart();
     }

    var correct = 0;
    for (var i = 0; i < globeWord.length; i++) {
     
      if (globeWord[i] === letterPass) {
        correctLetter(letterPass, i);
        correct--;

      } else if (correct === (globeWord.length-1)){
        wrongLetter(letterPass);

      } else {
        correct++;
        }
      }
}


function correctLetter(correct, location){
  globeAnswer[location] = correct;
  document.getElementById("wordDash").innerHTML = globeAnswer;
  document.getElementById("mock").innerHTML = "You may save the galaxy yet";
  globeWin++;

  
  if (globeWin === globeWord.length){
    document.getElementById("mock").innerHTML = "You love extraterrestrials!";
    document.getElementById("left").innerHTML = "Winner!!!";
    score();
    forceRestart();
   }
}  

function wrongLetter(wrong){
  arrayGuess.push(wrong);
  document.getElementById("missed").innerHTML = arrayGuess;
  document.getElementById("mock").innerHTML = "You clearly don't like aliens";
  lives();
}


function lives(){
  guessLeft--;

  if (guessLeft=== 1) {
  var leftStr = "Total Guesses Left: ZERO! You have failed your mission";
  document.getElementById("hangPix").src = pix[(guessLeft-1)];
  document.getElementById("left").innerHTML = leftStr;
  forceRestart();
  
  } else {
  var leftStr = "Total Guesses Left: " + (guessLeft-1);
  console.log(leftStr);
  document.getElementById("left").innerHTML = leftStr;
  document.getElementById("hangPix").src = pix[(guessLeft-1)];
  }
}


function score(){
  scoreTotals++;
  var scoreStr = "Total Number of Wins: " + scoreTotals;
  document.getElementById("score").innerHTML = scoreStr;
}

function forceRestart(){
      document.getElementById('input1').style.visibility = "hidden"; 
      document.getElementById('guess').style.visibility = "hidden"; 
  
}