import { useEffect, useState } from "react";
import { Input, Page, PuzzleLetter, PuzzleWrapper } from "./App.styles";
import { generateLetterSet } from "./generateLetterSet";

function App() {
	const [ letters, setLetters ] = useState([])
	const [ targetWord, setTargetWord ] = useState('')

	const onWordChange = (event) => {
		const word = event.target.value
		setTargetWord(word)
	}

	useEffect(() => {
		setLetters( generateLetterSet() )
	}, [])

	const letterMatchesTargetWord = ( letter, index ) => {
		for ( let i = 0; i < targetWord.length; i++ ) {
			if ( targetWord[i] === letter ) {
				return true
			}
		}
	}

  return (
    <Page>
		<h1>Word Search</h1>
		<Input 
			placeholder="Type a word"
			onChange={(event) => onWordChange(event)}
		/>
		<PuzzleWrapper>
			{ letters.map( (letter, index) => {
				const letterIsHighLighted = letterMatchesTargetWord( letter, index )
				return (
				<PuzzleLetter key={`${letter}-${index}`} isHighlighted={letterIsHighLighted}>
					{letter}
				</PuzzleLetter>
				)
			}  ) }
		</PuzzleWrapper>
	</Page>
  );
}

export default App;
