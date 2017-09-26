var display = document.getElementById('display');
var solarPanel = document.getElementById('solarPanel');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator; 



//Wait for page to load before executing
document.onreadystatechange = function() { //boilerplate
	if (document.readyState === "interactive") { //boilerplate
		
		allClear(); //Clears everything to start fresh

		for (i = 0; i < keys.length; i++) { //Grabbing each digit button in the numeric class
			keys[i].addEventListener("click", ButtonLogic); //When a digit button is clicked, we run the ButtonLogic function
		}
		solarPanel.addEventListener("click", Surprise);
	}
}

//Define ButtonLogic function:
function ButtonLogic () {
	
	var keyLabel = this.innerHTML; //Grabs the text (innerHTML) of the button that was clicked and stores it in digit
	
	//Number Button Logic
	if(this.classList.contains('numeric')) { //Checks to see if the button pushed is of the numeric class
		if (display.innerHTML === "0") { //IF current display is 0...
			display.innerHTML = keyLabel; //Replaces current display text with digit (button text)
		} else {
			display.innerHTML = display.innerHTML + keyLabel; //Appends digit (button text) to display IF current display is not 0
		}
	} else if (this.classList.contains('decimal')) {
		alert("Handle the decimal!");
	} else if (this.classList.contains('operator')) {
		alert("Handle the operator!");
	} else if (this.classList.contains('allclear')) {
		allClear();
	} else if (this.classList.contains('clear')) {
		clear();
	}
}


//Function to do a Clear (C)
function clear() {
	if(selectedOperator === '') {
		value1 = '';
	} else {
		value2 = '';
	}
	alert("Clear!");
}


//Function to do a Clear All (AC)
function allClear () {
	value1 = '';
	value2 = '';
	selectedOperator = '';
	display.innerHTML = "0";
}


//Solar Panel Easter Egg Fun
function Surprise () {
	alert("SURPRISE!");
}
