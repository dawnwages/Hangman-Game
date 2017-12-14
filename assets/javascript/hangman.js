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

//Setting up my variables
var listBlackMovies = ["Do The Right Thing", "Shaft", "Waiting to Exhale", "Love Jones", "The Color Purple", "John Q", "Moonlight", "SuperFly"];
var randomComputerPick; 
var successPicks = [];
var failPicks = [];
var allPicks = [];
var computerWord = [];
var displayWord = [];
var charFailArray = [];

//The computer automatically picks one of the objects from the list as soon as it starts. 
//TODO: Change this to onclick so you don't have to refresh the page to enjoy another game use the spacebar
var computerPick = listBlackMovies[Math.floor(Math.random() * listBlackMovies.length)];
		console.log(computerPick);
		console.log('-------------------');

var upperComputerPick = computerPick.toUpperCase(); //make it uppercase so it's easier to compare
		console.log(upperComputerPick);
		console.log('-------------------');
		
// spits out empty array before the key press
// console.log(computerWord);
// console.log('-------------------');
// console.log(displayWord);
// console.log('-------------------');

//This displays like the count of characters but it doesn't really add to anything. It should probably be deleted.
//var emptyCharacters = upperComputerPick.length;
//console.log(emptyCharacters);
//console.log('-------------------');




//Don't need this anymore if I create the array of elements for what will be displayed 
//for (var i = 0; i < upperComputerPick.length; i++){
// 	var newLetterDiv = document.createElement('div');

// 	newLetterDiv.innerHTML = "_";

// 	hangmanDiv.appendChild(newLetterDiv);


// }
//This just shows the first place there is a space that I was trying to 
//console.log("where are the spaces "+ upperComputerPick.indexOf(" "));

//THIS IS THE GOOD STUFF IT CREATES THE ARRAY FOR THE DISPLAY AND PUTS THE COMPUTER PICK IN AN ARRAY 
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

	for (var i = 0; i < upperComputerPick.length; i++){
		charFailArray.push(i);
	}

//Display the hangman game as soon as you define displayWord so it doesn't show up after the first guess
var hangDisplay = document.getElementById("Hangman");
hangDisplay.innerHTML = "";
	for (var i = 0; i < displayWord.length; i++){

		var newLetterDiv = document.createElement('div');

		newLetterDiv.innerHTML= displayWord[i];

		hangDisplay.appendChild(newLetterDiv);
	}

//Definitely need this userDisplay defines where key text will show up.
var userDisplay = document.getElementById("user-text")

//Ok so this is when you press any key on your keyboard
//TODO: Do you want to restrick it to only alpha numeric keys?
document.onkeyup = function(event) {
	

	var userPick = event.key.toUpperCase(); //This is where we define what the user picked and automatically makes it uppercase
	userDisplay.textContent = userPick; // changes what is in the "user-text" span to whatever the user has just picked
	console.log(event.key);
	console.log('-------------------');
	console.log(allPicks); // empty because I havent pushed content to allPicks array yet

	//if the index of this means we're checking to see if we've guessed that question 
	//console.log("this is the index location of previous pick versus current user pick: " + allPicks.indexOf(userPick));
	
	// var userPick = event.key.toUpperCase();
	// userDisplay.textContent = userPick;
	// console.log(event.key);
	// console.log('-------------------');
	// console.log(allPicks);

	console.log("this is the index location of previous pick versus current user pick: " + allPicks.indexOf(userPick));
	
	
	//this checks to see if you've picked this product before
	if (allPicks.indexOf(userPick) > 0){
		alert("You've already picked this character.");
	}
	else{
		var charSuccess = 0; //charSuccess will count the number of times that letter is in the code and counts it as one round of success.
		//this is important because if charSuccess is greater than zero then its its a successful round, and if it less than zero you didn't match any letters
		
		for (var i = 0; i < upperComputerPick.length; i++){
			
			if (userPick == upperComputerPick[i]){
				charSuccess = charSuccess +1; //everytime you successfully match a letter in each placement then it counts it. 
				//It needs to reset to zero each guess.
				displayWord[i] = userPick; //set that place in the array to what was guessed.
				// charFailArray = charFailArray.splice(i,1);
				// i--;
			}

			else { 
				// console.log("this is the array of failed positions:" + charFailArray);
				//charFailArray = charFailArray.filter( function(){i=i});
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

		//if there are only spaces left in the word, show a message that says congratulations and press space bar to restart game.
		// for (var i = 0; i < upperComputerPick.length; i++){

		// 	if displ	
		// }
		console.log("this is the array of failed positions:" + charFailArray);
	}

	allPicks.push(userPick); //push userpick at the end because you don't want it to mess up your index of allPicks to see if you've picked the letter before
	console.log("these are failed picks : "+ failPicks);
	index = upperComputerPick.indexOf(userPick);
	console.log("this is the location of the user pick in the secret word:" + index);
	console.log('-------------------');
	repeat = allPicks.indexOf(userPick)
	console.log("this is the location of the user pick in all of the picks you've done before:" + repeat);

	function updateScore() {
		document.querySelector("#badGuess").innerHTML = "Fail Picks: " + failPicks;
	}

	updateScore();


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