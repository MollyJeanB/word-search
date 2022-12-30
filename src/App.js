import { Input, Page, PuzzleLetter, PuzzleWrapper } from "./App.styles";
import { generateLetterSet } from "./generateLetterSet";

function App() {
	const letters = generateLetterSet()
  return (
    <Page>
		<h1>Word Search</h1>
		<Input 
			placeholder="Type a word"
		/>
		<PuzzleWrapper>
			{ letters.map( (letter, index) => {
				return (
				<PuzzleLetter key={`${letter}-${index}`}>
					{letter}
				</PuzzleLetter>
				)
			}  ) }
		</PuzzleWrapper>
	</Page>
  );
}

export default App;
