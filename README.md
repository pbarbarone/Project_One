# Project_One
Peter's Project 1 JavaScript Type game.


A front end typing based game. Point value based on key strokes, modified with mistyped keys and bonus added on word complete. 

CSS styling for 3 different pages. The landing page contains the 3 vocab option buttons. Upon clicking any, the landing page fades out into the games main page.
Each button grabs the corresponding array from the api.js file.
The star wars and pokemon word banks were obtained on document load from AJAX calls to their respective API's
The default word bank was generated through a third party site. The pokemon API struggles on load slightly, sometimes taking up to 20 seconds to load. Usually, it is under 5.
So the vocab is chosen, and the corresponding word bank array is set as a parameter in the different game functions. 

On page load, global key listeners are initiated for every key on the keyboard. By default, nothing happens with each key, until the game starts.
The key check function splits each word randomly chosen from the array, and split into an array of individual letters. 
In this same function, each newly split letter has a paired newly created span that is added to the DOM. 
This span hold that letter, and has an ID that corresponds with it's index in the array.

With global key listening already activated, and each letter having it's own span and simultaneously using the toString() method to give it a key value,
the pressed key is passed as a parameter into this checkKey function. If it matches the string value of that span, a point is added and the staged word progresses one letter.
On letter progression, the prior letter is highlighted and no long able to be typed. If the key does not match, a point is subtracted, and the spans do not allow progression.
Once they array length of "typed span" class = that of the words array length, the function recognizes the word is complete.
Bonus points are awarded, and the resetWord function is called.

The resetWord function resets current span counter to 0, clears the type stage to a blank slate, and regenerates a new word to the alphaArray by running the wordToArray function.

This continues until the timer ends, at which point some display text shows the round is now over. All relevant parameters are reset, timer resets, and if the high score was beaten, the display will update.
You have the option to play another round with this word bank, or return to the landing page and choose a new word bank.
