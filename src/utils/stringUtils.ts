import { RandomStringSplice, missingChar } from '../types';

export const randomStringSlice = (
	word: string,
	sliceAmount: number = 2,
): RandomStringSplice => {
	let extractedChars: missingChar[] = [];
	let splicedWord = word.split('');
	for (let i = 0; i < sliceAmount; i++) {
		const char = splicedWord[Math.floor(Math.random() * splicedWord.length)];
		if (char !== '_') {
			extractedChars.push({ char, index: splicedWord.indexOf(char) });
			splicedWord[extractedChars[i].index] = '_';
		} else --i;
	}
	extractedChars.sort((a, b) => (a.index > b.index ? 1 : -1));

	const gameWord = splicedWord;
	const missingChars = extractedChars.map(({ char }) => char);
	return {
		gameWord,
		missingChars,
	};
};

export const generateRandomChars = (
	exclude: string[] = [],
	amount: number = 6,
): string[] => {
	let generatesCharArray: string[] = [];
	const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let filteredChars = allCharacters;
	exclude.forEach((char) => {
		filteredChars = filteredChars.replace(char, '');
		generatesCharArray.push(char);
	});
	for (let i = 0; i < amount; i++) {
		const char = filteredChars.charAt(
			Math.floor(Math.random() * filteredChars.length),
		);
		filteredChars = filteredChars.replace(char, '');
		generatesCharArray.push(char);
	}
	return shuffleArray(generatesCharArray);
};

const shuffleArray = (array: string[]): string[] => {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};
