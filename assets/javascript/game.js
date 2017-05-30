// console.log(chance.word());

//waiting for user to click the begin button to start game
// var waitingForAny = false;



function myStart(){
console.log("Start Page")

// Setting variable
var score = 12;
var letters = "abcdefghijklmnopqrstuvwxyz";
var guess ;             // Guessed letter
var arrayGuess = [ ];      // Stored array all guessed letters
var lives ;             // Lives
var counter ;           // Count correct geusses
var space;              // Number of spaces in word '-'

//word for hanging the space man
var words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];

// random word from words array
var word = words[Math.floor(Math.random()*words.length)];

//selecting a word and then breaking it into an array
var letterWords = Array.from(word);

console.log(letters);
console.log(words);
console.log(word);
console.log(letterWords);

// document.write(for (var i = 0; i < word.length; i++) {
    
//     displayField = word[i];
// })



//Input value from input field of html
function myJsFunction(){
    var text = document.getElementById('input1').value;
      // Converts the user's answer to lowercase.
    var textLower = text.toLowerCase();
    console.log(textLower);
    console.log(letters.includes(textLower));
    if(textLower.length !== 1 && letters.includes(textLower)===false){
        alert('Invalid Input');
    }
    else{
        console.log('OK letter input');
        }

    }

function checkGuess(){
    for (var i = 0; i < word.length; i++) {
        word[i] !== 0;
    }
}

function correctLetter(){
// document.getElementById("guess").innerHTML = function;
}

 // Create geusses ul
  //  result = function () {
  //   wordHolder = document.getElementById('hold');
  //   correct = document.createElement('ul');

  //   for (var i = 0; i < word.length; i++) {
  //     correct.setAttribute('id', 'my-word');
  //     guess = document.createElement('li');
  //     guess.setAttribute('class', 'guess');
  //     if (word[i] === "-") {
  //       guess.innerHTML = "-";
  //       space = 1;
  //     } else {
  //       guess.innerHTML = "_";
  //     }

  //     geusses.push(guess);
  //     wordHolder.appendChild(correct);
  //     correct.appendChild(guess);
  //   }
  // }
}

