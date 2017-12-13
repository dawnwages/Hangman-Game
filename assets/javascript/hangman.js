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
var computerWord = [];
var displayWord = [];

var computerPick = listBlackMovies[Math.floor(Math.random() * listBlackMovies.length)];
console.log(computerPick);
console.log('-------------------');

var upperComputerPick = computerPick.toUpperCase();
console.log(upperComputerPick);
console.log('-------------------');
// Make computer pick an array



console.log(computerWord);
console.log('-------------------');
console.log(displayWord);
console.log('-------------------');

var emptyCharacters = upperComputerPick.length;
console.log(emptyCharacters);
console.log('-------------------');




//Don't need this anymore if I create the array of elements for what will be displayed 
//for (var i = 0; i < upperComputerPick.length; i++){
// 	var newLetterDiv = document.createElement('div');

// 	newLetterDiv.innerHTML = "_";

// 	hangmanDiv.appendChild(newLetterDiv);


// }

console.log("where are the spaces "+ upperComputerPick.indexOf(" "));

	for (var i =0; i < upperComputerPick.length; i++){
		if( upperComputerPick[i] === ' '){
			computerWord.push(upperComputerPick[i]);
			displayWord.push(' ');
			}
		else {
			computerWord.push(upperComputerPick[i]);
			displayWord.push('_');
		}
	} 



var userDisplay = document.getElementById("user-text")

document.onkeyup = function(event) {
	var userPick = event.key.toUpperCase();
	userDisplay.textContent = userPick;
	console.log(event.key);
	console.log('-------------------');
	console.log(allPicks);

	console.log("this is the index location of previous pick versus current user pick: " + allPicks.indexOf(userPick));
	
	var userPick = event.key.toUpperCase();
	userDisplay.textContent = userPick;
	console.log(event.key);
	console.log('-------------------');
	console.log(allPicks);

	console.log("this is the index location of previous pick versus current user pick: " + allPicks.indexOf(userPick));
	
	

	if (allPicks.indexOf(userPick) > 0){
		alert("You've already picked this character.");
	}
	else{
		var charSuccess = 0;
		for (var i = 0; i < upperComputerPick.length; i++){
			
			if (userPick == upperComputerPick[i]){
				charSuccess = charSuccess +1;
				displayWord[i] = userPick;
			}

			else {
				
			}
			
		}
		console.log("this is how many letters you've just matched successfully:" + charSuccess);
		console.log(displayWord);
		if (charSuccess > 1){
			alert("Yass Queen, you matched "+charSuccess+" letters!");
		}
		else if (charSuccess > 0){
			alert("Yass Queen, you matched "+charSuccess+" letter!");
		}
		else {
			alert("Darn Girl, try again.");
			failPicks.push(userPick);

		}
	}

	allPicks.push(userPick);
	console.log("these are failed picks : "+ failPicks);
	index = upperComputerPick.indexOf(userPick);
	console.log("this is the location of the user pick in the secret word:" + index);
	console.log('-------------------');
	repeat = allPicks.indexOf(userPick)
	console.log("this is the location of the user pick in all of the picks you've done before:" + repeat);






	// for (var i = 0; i < upperComputerPick.length; i++){
		
		

	// 	else {


	// 	}

	// }


		
		


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

var hangDisplay = document.getElementById("Hangman");
hangDisplay.innerHTML = "";
	for (var i = 0; i < displayWord.length; i++){

		var newLetterDiv = document.createElement('div');

		newLetterDiv.innerHTML= displayWord[i];

		hangDisplay.appendChild(newLetterDiv);
	}



}
// document.onkeyup = function(event) {
// function updateScores(){
// 	document.querySelector("badGuess").innerHTML = failPicks;
// }

// updateScores();
// }


// use indexOf
// returns an index location
	// var hangmanDiv = document.getElementById('HangmanToo');

	// function renderDisplay() {
	// 	for (var i = 0; i < upperComputerPick.length; i++){
	// 		var eachChar = document.createElement('div');
	// 		eachChar.innerHTML = displayWord[i];
	// 		hangmanDiv.appendChild(eachChar);
	// 	}
	// }




	// renderDisplay();