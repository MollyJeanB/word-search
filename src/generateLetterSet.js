
const bearsAndFriends = [
	'b','e','a','r','a',
	'e','e','c','r','l',
	'a','l','a','o','b',
	'r','e','t','r','a',
	'b','d','o','g','t',
]

const foods = [
	'p','o','r','k','a',
	'e','a','t','r','l',
	'a','t','s','a','b',
	'r','e','t','t','a',
	'b','u','n','s','a',
]

const transit = [
	't','r','a','i','n',
	'e','a','d','r','b',
	'a','i','s','a','i',
	'r','l','c','t','k',
	'b','o','a','t','e',	
]

const colors = [
	't','r','e','d','d',
	'e','a','d','l','b',
	'a','i','o','a','i',
	'l','g','c','t','k',
	'b','r','o','w','n',	
]

const letterSets = [ bearsAndFriends, foods, transit, colors ]

export const generateLetterSet = () => {
	const randomIndex = Math.floor(Math.random() * 4)
	return letterSets[randomIndex]
}

