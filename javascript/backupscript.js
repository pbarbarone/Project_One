var typeStage = document.querySelector(".typed-words");


startButton.addEventListener("click", function(){
 setTimeout(startButtonClick,3000);
});

(function(){


// splits string into array of unicode values
function stringToUni(str) {
  var resultArray = [];
  for (var i = 0; i < str.length; i++) {
    resultArray[i] = str.charCodeAt(i);
  }

  return resultArray;
}

//  attempting to create individual spans on page for each letter in input
function wordToArray(str){
	var alphaArray = str.split('');

	for (var i = 0; i <alphaArray.length; i++){
  	var span = document.createElement("span");
  			span.classList.add("span");
        span.id="span"+i.toString();
  			span.innerHTML = alphaArray[i];
  			console.log(span);
        typeStage.appendChild(span);

}
	return alphaArray;
}

// so far adds event listener to key of corresponding unicode
function checkLetter (resultArray){
	for (let i = 0; i < resultArray.length; i ++){
	 document.addEventListener("keypress", function(event) {
    console.log("first click");
    console.log(i);

    ///write logic above this conditional that makes the b turn gree
    if(i>0){
      ///inside of this conditional write logic that makes all subsequent
      ///things turn green by checking if previous thing has turned green
      if (event.keyCode == resultArray[i]) {
      console.log('correct key value is' + event.keyCode);
      var currentSpan = document.getElementById("span"+i);
      var previousSpan = document.getElementById("span"+i-1);
        console.log(previousSpan);
        if(previousSpan.classList.contains("typed-span") == false){
            console.log(currentSpan);
            currentSpan.classList.add("typed-span")
        }
       } 
    }
    });
  }
}

// test input, to be changed
var input = 'boogie';
var resultArray = stringToUni(input);

var alphaArray = wordToArray(input);

checkLetter(resultArray);
console.log(resultArray);
console.log(alphaArray);


}())



