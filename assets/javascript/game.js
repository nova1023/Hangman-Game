

var wowTerms = ["Deathknight", "Warrior", "Paladin", "Monk", "Druid",
"Demon Hunter", "Priest", "Shaman", "Hunter", "Rogue", "Mage", "Thrall",
 "Deathwing", "Goblin", "Night Elf", "Blood Elf", "Orc", "Tauren",
 "Human", "Forsaken", "Worgen", "Troll", "Dwarf", "Draenei", "Worgen",
 "Panderia", "Gnome"];

// var possibleGuesses = ["q","w","e","r","t","y","u","i","o","p","a","s",
// "d","f","g", "h","j","k","l","z","x","c","v","b","n","m"];


var winCount = 0;
var lossCount = 0;
var lifeCount = 12;
var usedList = [];
var emptyArray = [];
var computerWord;


document.onkeyup = function(event) {
	var userLetter = event.key;
	var userGuess = userLetter.toLowerCase();
	var letterIsCorrect = false;

	for (var i = 0; i < computerWord.length; i++) {

		if (userGuess === computerWord.charAt(i).toLowerCase()) {
			// switch underscore for correct letter
			letterIsCorrect = true;
			emptyArray[i] = userGuess;
			document.getElementById("currentWord").innerHTML = emptyArray.join(" ");
		}
	} // for loop ends here

	if(letterIsCorrect === false){
		// this means you got it incorrect
		usedList.push(userGuess);
		lifeCount--;
		document.getElementById("lives").innerHTML = lifeCount;
		document.getElementById("alreadyGuessed").innerHTML = usedList;
	}

	//update wincounter if there are no more '_' in emptyArray
	if (emptyArray.indexOf("_") < 0){
		winCount++;
		document.getElementById("wins").innerHTML = winCount;
		resetGame();
	}

	//updates loss counter if lifeCount = 0
	if (lifeCount === 0){
		lossCount++;
		document.getElementById("losses").innerHTML = lossCount;
		resetGame();
	}

}

// start game

function startGame() {	
	winCount = 0;
	lossCount = 0;
	lifeCount = 12;
	usedList = [];
	computerWord = wowTerms[Math.floor(Math.random() * wowTerms.length)];

	
	for (var i = 0; i < computerWord.length; i++){
		if (computerWord.charAt(i) === " "){
			emptyArray.push(" ");
		
		}
		else {
			emptyArray.push("_");
			
		}
	};
	document.getElementById("currentWord").innerHTML = emptyArray.join(" ");
}
startGame();

//reset game when user wins or loses

function resetGame() {	
	lifeCount = 12;
	emptyArray = [];
	usedList = [];
	computerWord = wowTerms[Math.floor(Math.random() * wowTerms.length)];
	
	for (var i = 0; i < computerWord.length; i++){
		if (computerWord.charAt(i) === " "){
			emptyArray.push(" ");
		}
		else {
			emptyArray.push("_");
		}
	};
	document.getElementById("currentWord").innerHTML = emptyArray.join(" ");
	document.getElementById("lives").innerHTML = lifeCount;
	document.getElementById("alreadyGuessed").innerHTML = usedList;
}
resetGame();



