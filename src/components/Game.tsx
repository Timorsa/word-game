import React, { useState, useEffect } from 'react';
import {
	PageContainer,
	MainHeading,
	WordContainer,
	SmallGameHeading,
	CharCard,
	SolutionCharCard,
} from './styles';
import { generateRandomChars, randomStringSlice } from '../utils';

const Game = () => {
	const [firstLetter, setFirstLetter] = useState('_');
	const [secondLetter, setSecondLetter] = useState('_');
	const [assignedFirstLetter, setAssignedFirstLetter] = useState(false);
	const [filledFirstLetter, setFilledFirstLetter] = useState(false);

	const [word, setWord] = useState<string[]>([]);
	const [gameLetters, setGameLetters] = useState<string[]>([]);

	useEffect(() => {
		const { gameWord, missingChars } = randomStringSlice('BEAUTIFUL');
		setWord(gameWord);
		setGameLetters(generateRandomChars(missingChars));
		console.log(gameWord);
	}, []);

	const handleCardClick = (char: string) => {
		if (filledFirstLetter) {
			setSecondLetter(char);
		} else {
			setFirstLetter(char);
			setFilledFirstLetter(true);
		}
	};

	return (
		<PageContainer>
			<MainHeading>Guess The Word !</MainHeading>
			<WordContainer>
				{word.map((char, index) => {
					switch (char) {
						case '_':
							if (assignedFirstLetter) {
								return (
									<CharCard key={`${index}-mainWord${char}`}>
										{secondLetter}
									</CharCard>
								);
							} else {
								setAssignedFirstLetter(true);
								return (
									<CharCard key={`${index}-mainWord${char}`}>
										{firstLetter}
									</CharCard>
								);
							}
						default:
							return (
								<CharCard key={`${index}-mainWord${char}`}> {char}</CharCard>
							);
					}
				})}
			</WordContainer>
			<SmallGameHeading>Guess the missing character's</SmallGameHeading>
			<WordContainer>
				{gameLetters.map((char, index) => (
					<SolutionCharCard
						key={`${index}-gameWordLetter${char}`}
						onClick={() => handleCardClick(char)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						{char}
					</SolutionCharCard>
				))}
			</WordContainer>
		</PageContainer>
	);
};

export default Game;
