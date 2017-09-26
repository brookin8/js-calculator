# Calculator Requirements

## Tech

1. HTML
2. CSS
3. JS

## Wireframe

See wireframe-js-calculator.png

## MVP (minimal viable product)

The calculator should have a fake solar panel at the top.

THe calculator should have a display area at the top.

THe display should show "0" by default.

The calculator should have the following function buttons:
	1. Division (/)
	2. Multiplication (X)
	3. Subtraction (-)
	4. Addition (+)
	5. Calculate (=)
	6. Clear (C)
	7. All Clear (AC)
	8. Sign (+/-)

The calculator should also have 10 number buttons, 0-9. 

The calculator should store three values internally:
	1. The first number entered by the user (possibly multidigit)
	2. The operator selected by the user (/, X, -, +)
	3. The secon number entered by the user

The display should update as the user presses number buttons. 

When the decimal point is pressed, it should be appended to the current number and the display should be updated, just as with a digit button. However, there can be only one decimal point in either stored number. 

When the calculate button (=) is pressed, the calculator should:
	1. Apply the operation to the two stored numbers in the appropriate order
	2. Update the display

When the Clear button (C) is pressed, the current stored number should be discarded and the display should return to 0.  

When the All Clear button (AC) is pressed, all stored data should be discarded, and the display should return to 0. 

When the Sign button (+/-) is pressed, the sign of the current value should alternate. 









