import styled from 'styled-components'

export const Page = styled.main`
	box-sizing: border-box;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Input = styled.input`
	width: 230px;
	font-size: 16px;
	padding: 15px;
	border: 2px solid black;
`

export const PuzzleWrapper = styled.ul`
	list-style: none;
	margin-left: 0;
	padding-left: 0;
	display: flex;
	flex-wrap: wrap;
	width: 320px;
	margin-top: 30px;
	border: 1px solid black;
`

export const PuzzleLetter = styled.li`
	width: 62px;
	height: 62px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	border: 1px solid black;
	background-color: ${props => props.isHighlighted ? '#F9E076' : 'white'}
`
