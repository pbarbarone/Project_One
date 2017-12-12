
// (function(){
// }())


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
        // jquery selector container div, append spans, add 
}
	return alphaArray;
}

// so far adds event listener to key of corresponding unicode
function checkLetter (resultArray){
	for (let i = 0; i < resultArray.length; i ++){
	document.addEventListener("keypress", function(event) {

     if (event.keyCode == resultArray[i]) {
         console.log('correct key value is' + event.keyCode);
     }
})
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



