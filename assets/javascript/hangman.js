//HANGMAN GAME 


//User picks a category

//Computer randomly picks a word from that Category

//Computer displays empty space for each letter in the word choice

//User must pick a letter

//No you've already chosen that letter

//No it's not a letter

//Check if letter matches the word choice

//Success it matches

  //fills in a letter of the hangman game
  //adds letter to a list of letters already chose  

//No it doesn't match 
  //alerts that you have chosen a letter that does not match
  //logs letter into letters already chosen

//Go back to step one


var listBlackMovies = ["Do The Right Thing", "Shaft", "Waiting to Exhale", "Love Jones", "The Color Purple", "John Q", "Moonlight", "SuperFly"];
var randomComputerPick; 
var successPicks = [];
var failPicks = [];
var allPicks = [];

var computerPick = listBlackMovies[Math.floor(Math.random() * listBlackMovies.length)];
console.log(computerPick);
console.log('-------------------');

var upperComputerPick = computerPick.toUpperCase();
console.log(upperComputerPick);
console.log('-------------------');


var emptyCharacters = upperComputerPick.length;
console.log(emptyCharacters);
console.log('-------------------');

var hangmanDiv = document.getElementById('Hangman');

for (var i = 0; i < upperComputerPick.length; i++){
	var newLetterDiv = document.createElement('div');

	newLetterDiv.innerHTML = "_";

	hangmanDiv.appendChild(newLetterDiv);


}

var userDisplay = document.getElementById("user-text")

document.onkeyup = function(event) {
	var userPick = event.key.toUpperCase();
	userDisplay.textContent = event.key;
	console.log(event.key);
	console.log('-------------------');

	allPicks.push(userPick);
	console.log(allPicks);
	console.log('-------------------');

	index = upperComputerPick.indexOf(userPick);
	console.log(index);
	console.log('-------------------');

	// Add a statment to check to see if i've already guessed it-- doesn't work. try a loop.
// 	if (allPicks.indexOf(userPick) > -1){

// 		alert("You've already tried that.");
// 		console.log('did you already try this?');
// 		console.log(allPicks.indexOf(userPick));
// 		console.log('-------------------');

// 	}

// 	else{

// 		if (index > -1 ){
// 			alert("Good Guess!");
// 			successPicks.push(userPick);
// 		}

// 		else {
// 			alert("Sorry Sis!");
// 		}
// 	}
// }

// use indexOf
// returns an index location
