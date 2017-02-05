
// I tried to make this work. Deleted lines over and over because nothing worked. I'm probably going to
// have to schedule some 1on1s and go over this assignment. I really wanted to ty and figure stuff out by myself
// but not going to do that anymore.



var wowTerms = ["Deathknight", "Warrior", "Paladin", "Monk", "Druid",
"Demon Hunter", "Priest", "Shaman", "Hunter", "Rogue", "Mage", "Thrall",
 "Deathwing", "Goblin", "Night Elf", "Blood Elf", "Orc", "Tauren",
 "Human", "Forsaken", "Worgen", "Troll", "Dwarf", "Draenei", "Worgen",
 "Panderia", "Gnome"];

var possibleGuesses = ["q","w","e","r","t","y","u","i","o","p","a","s",
"d","f","g", "h","j","k","l","z","x","c","v","b","n","m"];


var winCount = 0;
var lossCount = 0;
var lifeCount = 12;
var usedList = "";




document.onkeyup = function(event) {
	var userLetter = event.key;
	var userGuess = userLetter.toUpperCase();
}

// start game

function startGame() {	
	winCount = 0;
	lossCount = 0;
	lifeCount = 12;
	var computerWord = wowTerms[Math.floor(Math.random() * wowTerms.length)];
	var	computerChose = computerWord[Math.floor(Math.random() * computerWord.length)]
	};
	document.getElementById("currentWord").innerHTML = computerChose;
}
startGame();

//blank spaces
function blankSpaces() {
	for (i < 0; i < computerChose; i++);
		document.getElementById("#currentWord").innerHTML = "_ ";
}
blankSpaces();

//lsit of guessed letters
function guessList() {
	usedList = "";
	for (var i = 0; i < possibleGuesses.length; ++i){
		usedList = (usedList + possibleGuesses[i])
	};
		document.getElementById("#alreadyGuessed") = usedList;
}
guessList();

//game over
function gameOver() {
	if (lifeCount === 0) {
		document.getElementById("announcement").innerHTML = ("Game Over!");
	}

//new game
function newRound() {
	if ()
}
