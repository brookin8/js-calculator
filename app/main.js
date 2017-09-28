var display = document.getElementById('display');
var solarPanel = document.getElementById('solarPanel');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator; 
var equalOn = false;



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
		numeric(keyLabel);
	} else if (this.classList.contains('decimal')) {
		decimal(keyLabel);
	} else if (this.classList.contains('operator')) {
		operate(keyLabel);
	} else if (this.classList.contains('allclear')) {
		allClear();
	} else if (this.classList.contains('clear')) {
		clear();
	} else if (this.classList.contains('calculate')) {
		calculate();
		equalOn = true;
	} else if (this.classList.contains('plusMinus')) {
		plusMinus();
	}
}


function plusMinus() {
	if(selectedOperator === '') {
		if(value1 > 0) {
			value1 = -Math.abs(Number(value1));
			display.innerHTML = value1;
		} else if(value1 < 0) {
			value1 = Math.abs(Number(value1));
			display.innerHTML = value1;
		} 
	} else {
		if(value2 > 0) {
			value2 = -Math.abs(Number(value2));
			display.innerHTML = value2;
		} else if(value2 < 0) {
			value2 = Math.abs(Number(value2))
			display.innerHTML = value2;
		} 
	}

}



//Function 
function numeric(keyLabel) {

	if(equalOn) {
		allClear();
		equalOn = false;
	}

	if(selectedOperator === '') {
		value1 = properAppend(value1, keyLabel); //Sets & stores value 1
		display.innerHTML = value1;
	} else {
		value2 = properAppend(value2, keyLabel);
		display.innerHTML = value2;
	}
}

function properAppend(main, added) {
	if (main === "0") { //IF current display is 0...
		return added; //Replaces current display text with digit (button text)
	} else {
		return main + added; //Appends digit (button text) to display IF current display is not 0
	}
}

//Function
function decimal(keyLabel) {
	
	if(equalOn) {
		allClear();
		equalOn = false;
	}

	if(selectedOperator === '') { //Still in value 1
		if(value1.indexOf('.') === -1) { //No decimal
			if(value1 === '') {
				value1 = '0' + keyLabel;
				display.innerHTML = value1;
			} else {
				value1 = value1 + keyLabel;
				display.innerHTML = value1;
			}
		}
	} else {
		if(value2.indexOf('.') == -1) {
			if(value2 === '') {
				value2 = '0' + keyLabel;
				display.innerHTML = value2;
			} else {
				value2 = value2 + keyLabel;
				display.innerHTML = value2;
			}
		}
	}
}


//Function operate
function operate(keyLabel) {
if(value1 === '') { //If value1 is empty
	value1 = 0; //Set value1 = 0
	selectedOperator = keyLabel; //Pressed operator is now 'selected operator' value

} else { //If value1 is NOT empty 
		if(selectedOperator === '') { //AND selectedOperator IS empty
			selectedOperator = keyLabel; //Pressed operator is now 'selected operator' value
		} else { //Value1 is NOT empty AND selectedOperator is NOT empty
			if(value2 === '') { //AND value2 is empty
				selectedOperator = keyLabel; //selectedOperator is replaced with the most recently pressed operator button

			} else { //Value1 is NOT empty AND selectedOperator is NOT empty AND value2 is NOT empty
				calculate();
				selectedOperator = keyLabel; //Store the most recently pressed operator in selectedOperator
			}
		}
	}
}


//Function to do a Clear (C)
function clear() {
	if(selectedOperator === '') { //If no operator has been pushed
		value1 = ''; //Reset value1 to be empty
	} else { //If an operator has been pushed
		value2 = ''; //Keep value1, but reset/empty value2
	}
	display.innerHTML = "0"; //Set display to 0
}


//Function to do a Clear All (AC)
function allClear () { //Needs to be tested
	value1 = '';
	value2 = '';
	selectedOperator = '';
	display.innerHTML = "0";
}

function calculate() {
	
	var results = '0';

	switch (selectedOperator) { //Case statement to assign a math function to each operator button (which are strings)
		case "+":
			results = Number(value1) + Number(value2);
			break;
		case "-":
			results = Number(value1) - Number(value2);
			break;
		case "X":
			results = Number(value1)*Number(value2);
			break;
		case "/":
			results = Number(value1)/Number(value2);
			break;
		default:
			results = value1;
			break;
	}
	value1 = results.toString();
	value2 = '';
	display.innerHTML = value1;
	//clear selectedOperator
	selectedOperator = '';

}


//Solar Panel Easter Egg Fun
function Surprise () {
	alert("SURPRISE!");
}
