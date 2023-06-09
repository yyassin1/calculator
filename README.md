# Vanilla JavaScript Calculator

This is a simple calculator implemented using vanilla JavaScript. It performs basic arithmetic operations such as addition, subtraction, and multiplication. The calculator interface is designed to respond to user clicks and display the result.

## Getting Started

To use the calculator, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in your web browser.

## Usage

The calculator interface displays a set of buttons representing numbers, operators, and other functions. To perform calculations, follow these steps:

1. Click on the number buttons to input the desired numbers.
2. Click on the operator buttons to select the arithmetic operation.
3. Click on the "=" button to perform the calculation and display the result.

## Functions

The calculator provides the following functions:

### `storeValue(number)`

This function is called when a number button is clicked. It stores the clicked number in an array called `values`.

### `display(a)`

This function is responsible for displaying the result or updating the calculator's display. You can modify this function to update the calculator's UI as needed.

### `operate()`

This function is called when the addition button is clicked. It calls the `addition()` function and then calls the `operate()` function.

### `addition()`

This function calculates the sum of all the numbers stored in the `values` array and assigns the result to a variable called `result`. Modify this function to handle addition logic as needed.

### `subtraction()`

This function is called when the subtraction button is clicked. Modify this function to handle subtraction logic as needed.

### `multiply()`

This function is called when the multiplication button is clicked. It assigns the first number stored in the `values` array to a variable called `f`. Modify this function to handle multiplication logic as needed.

### `divide(a, b)`

This function performs division between two numbers and returns the result. You can add this function to handle division logic if needed.

### `modulus(a, b)`

This function calculates the modulus (remainder) between two numbers and returns the result. You can add this function to handle modulus logic if needed.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request.
