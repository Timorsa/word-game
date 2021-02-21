import React from 'react';
import {
	IntroContainer,
	MainHeading,
	SmallHeading,
	MainButton,
} from './styles';

const Intro = () => {
	return (
		<IntroContainer>
			<MainHeading>GUESS THE WORD GAME</MainHeading>
			<MainButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
				New Game
			</MainButton>
			<SmallHeading> Your High Score : 0 </SmallHeading>
		</IntroContainer>
	);
};

export default Intro;
