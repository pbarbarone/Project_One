var typeStage = document.getElementById("type-stage");
var currentSpan = 0;
var defaultVocabulary = ["Banana","Boxer","Beautiful","blastoff","bountiful","badger","basketball"];
var vocabulary = [];
var startButton = document.getElementById("start-button");
var alphaArray = "";
var countdownContainer = document.getElementById("countdown");
var keystrokeCount = 0;
var keystrokeContainer = document.getElementById("keystrokes");
var vocabOptions = document.getElementById("vocabOptions");
var timerCount;
var highscoreDisplay = document.getElementById("highscore");
var starwarsButton = document.getElementById("starwars-button");
var pokemonButton = document.getElementById("pokemon-button");
highscoreDisplay.innerHTML = localStorage.keyScore;


vocabOptions.addEventListener("click", openGame);
startButton.addEventListener("click", startButtonClick);
starwarsButton.addEventListener("click", starwarsVocab);
pokemonButton.addEventListener("click", pokemonVocab);

// checks and sets up high score in local storage
if(localStorage.keyScore == undefined){
localStorage.keyScore = 0;
}

function starwarsVocab(){
  vocabulary = [];
  vocabulary = vocabulary.concat(starwarsArray);
}
function pokemonVocab(){
  vocabulary = [];
  vocabulary = vocabulary.concat(pokemonArray);
}

function openGame() {
  document.getElementById('body').classList.remove('init');
};

// on button clickm, resets score display, chooses first word, disables start button
function startButtonClick(){
  startButton.removeEventListener("click", startButtonClick);
  alphaArray = wordToArray(getFromVocab());
  keystrokeContainer.innerHTML = "0";
  keystrokeCount = 0;
  // adds global key stroke listeners on page load. no need for unicode conversions!
  document.onkeypress = function(e){
    e = e || window.event;
    checkKey(e.key);
  };
  timerStart();

};

// called when timer = 0. reenables start button, removes displayed word, updates highscore if beaten
function gameStop(){
  alert("game end");
  document.getElementById("type-stage").innerHTML="";
  startButton.addEventListener("click", startButtonClick);
  currentSpan = 0;
    if(keystrokeCount > localStorage.keyScore){
      localStorage.keyScore=keystrokeCount
      highscoreDisplay.innerHTML=localStorage.keyScore;
    }
};

// timer variable. once 0, runs gamestop function
function timerStart (){
  timerCount = 20;
  var interval = setInterval(function(){
    timerCount --;
    countdownContainer.innerHTML = timerCount;
    if (timerCount === 0){
      clearInterval(interval);
      gameStop();
      return;
    }
  }, 1000)
}

// random index number from vocab array
function getFromVocab(){
  return vocabulary[Math.floor(Math.random()*vocabulary.length)];
};

// converts string from vocab array into an array, each index a letter from word
function wordToArray(str){
  var newWordArray = str.split('');
// creates a span with unique id for each letter of array
  for (var i = 0; i <newWordArray.length; i++){
    var span = document.createElement("span");
        span.classList.add("span");
        span.id="span"+i.toString();
        span.innerHTML = newWordArray[i];
        typeStage.appendChild(span);

}
  return newWordArray;
};



//checks if pressed key exists inside of the current word's array, if so changes class to being highlighted, 
//  moves on to next letter in array
function checkKey(key){
  if (timerCount === 0){
    return; 
  }
  if( key === alphaArray[currentSpan]){
    keystrokeCount ++;
    keystrokeContainer.innerHTML = keystrokeCount;
    finishedSpan = document.getElementById("span"+currentSpan);
    finishedSpan.classList.add("typed-span")
    currentSpan ++;
  }
  if (currentSpan === alphaArray.length){
    resetWord();
  }
};

//cleans up reset. resets span counter at 0, making it cleaner to start a new game 
function resetWord(){
    currentSpan = 0;
    document.getElementById("type-stage").innerHTML="";
    alphaArray = wordToArray(getFromVocab());
};


console.log(alphaArray);



