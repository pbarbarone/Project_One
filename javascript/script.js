var typeStage = document.getElementById("type-stage");
var currentSpan = 0;
var vocabulary = ["banana","boxer","beautiful","blastoff","bountiful","badger","basketball"];
var startButton = document.getElementById("start-button");
var alphaArray = "";
var countdownContainer = document.getElementById("countdown");
var keystrokeCount = 0;
var keystrokeContainer = document.getElementById("keystrokes");
var vocabOptions = document.getElementById("vocabOptions");
var timerCount = 3;

vocabOptions.addEventListener("click", openGame);
startButton.addEventListener("click", startButtonClick);

function openGame() {
  document.getElementById('body').classList.remove('init');
};

function startButtonClick(){
  startButton.removeEventListener("click", startButtonClick);
  alphaArray = wordToArray(getFromVocab());

  // adds global key stroke listeners on page load. no need for unicode conversions!
  // if (timerCount > 0 === true){
  document.onkeypress = function(e){
    e = e || window.event;
    checkKey(e.key);
   };
    timerStart();
  }
// };

function gameStop(){
  alert("game end");
      document.getElementById("type-stage").innerHTML="";

}

function timerStart (){
  // var timerCount = 3;

  //TODO: look up how to make self closing setInterval or setTimeout
  var interval = setInterval(function(){
    timerCount --;
    console.log(timerCount);
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
        console.log(span);
        typeStage.appendChild(span);

}
  return newWordArray;
};



//checks if pressed key exists inside of the current word's array, if so changes class to being highlighted, 
//  moves on to next letter in array
function checkKey(key){
  if( key === alphaArray[currentSpan]){
    keystrokeCount ++;
    keystrokeContainer.innerHTML = keystrokeCount;
    finishedSpan = document.getElementById("span"+currentSpan);
    finishedSpan.classList.add("typed-span")
    // console.log(finishedSpan);
    currentSpan ++;
  }
  if (currentSpan === alphaArray.length){
    console.log("word complete");
    resetWord();
  }
};

// working on reset function
function resetWord(){
    currentSpan = 0;
    document.getElementById("type-stage").innerHTML="";
    alphaArray = wordToArray(getFromVocab());
};


console.log(alphaArray);



