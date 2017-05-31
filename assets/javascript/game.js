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

    // Setting variable
    // var life = 7;
    guessLeft = 7;        // Lives
    arrayGuess=[];


    //cleaning old html from a refresh
    document.getElementById("missed").innerHTML = arrayGuess;

    //word for hanging the space man
    var words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];

    // random word from words array
    var word = words[Math.floor(Math.random()*words.length)];

    //storing selected word into global var
    globeWord=word;

    //selecting a word and then breaking it into an array
    var letterWords = Array.from(word);

    console.log(letters);
    console.log(words);
    console.log(word);
    console.log(letterWords);

    //Setting up the blank array for the length of the word
    var answerWord = [];
    for (var i = 0; i < word.length; i++) {
            answerWord[i]="_";
        }
    console.log(answerWord);
    //global var
    globeAnswer = answerWord;

    document.getElementById("wordDash").innerHTML = globeAnswer;
    document.getElementById("hangPix").src = pix[6];

}


//Input value from input field of html
function myJsFunction(){
    console.log("input function runnning");

    var text = document.getElementById('input1').value;

    //Clear value in input
    document.getElementById('input1').value = "";

      // Converts the user's answer to lowercase
    var textLower = text.toLowerCase();
    console.log(textLower);
    console.log(letters.includes(textLower));

    //checks value to ensure it is a valid input
    if(textLower.length === 1 && letters.includes(textLower)===true){
        console.log('OK letter input');
        checkGuess(textLower);

     } else {
             alert('Invalid Input');
            }
    }

function checkGuess(letterPass){
  if (typeof globeWord === 'undefined') {
        myStart();
     }
    console.log(letterPass + globeWord);
    var correct = 0;
    for (var i = 0; i < globeWord.length; i++) {
     
      if (globeWord[i] === letterPass) {
        console.log(i);
        correctLetter(letterPass, i);
        correct--;

      } else if (correct === (globeWord.length-1)){
        wrongLetter(letterPass);

      } else {
        correct++;
        console.log(correct);
        }
      }
}


function correctLetter(correct, location){
  globeAnswer[location] = correct;
  document.getElementById("wordDash").innerHTML = globeAnswer;

  //checks for winning status
  var winCheck = $.inArray(globeAnswer,"_", true);
  console.log(winCheck);
  if (winCheck === -1){
    document.getElementById("left").innerHTML = "Winner!!!";
  }
}  


function wrongLetter(wrong){
  console.log("A wrong letter was guessed and has kicked off function wrongLetter")
  arrayGuess.push(wrong);
  console.log(arrayGuess);
  document.getElementById("missed").innerHTML = arrayGuess;
  lives();
}


function lives(){
  guessLeft--;
  console.log(guessLeft);

  if (guessLeft=== 1) {
  var leftStr = "Total Guesses Left: ZERO! You have failed your mission";
  document.getElementById("hangPix").src = pix[(guessLeft-1)];
  console.log(leftStr);
  document.getElementById("left").innerHTML = leftStr;
  
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
  console.log(scoreStr);
  document.getElementById("score").innerHTML = scoreStr;
}

