# Word Search

A JavaScript puzzle challenge written in React.

## The challenge

Your task is to wire up the puzzle so that when a user types in the text input, the corresponding string or strings are highlighted in yellow. Here are a few additional acceptance criteria and things to note:

1) The yellow highlights should update on each keystroke, so if a user is typing the word "bear," when they type a "b" each "b" in the puzzle should be highlighted. When they add the "e," only valid "be" strings will be highlighted, and so on.

	* Hint: The styled component `<PuzzleLetter>` is already set up to take an optional prop `isHighlighted`, a boolean. When `isHighlighted` is true, the background color of the element is set to pale yellow.

2) Words can appear 
	* horizontally (left to right)
	* vertically (top to bottom)
	* diagonally (bottom left to top right OR top left to bottom)

3) If there are no matches, the user should see text below the input that says "No matches"

## Getting started

In the project directory, you can run:

### `npm install` to install dependencies, and then

### `npm start` to start the server

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
