import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, MainHeading, SmallHeading, MainButton } from './styles';

const Intro = () => {
	return (
		<PageContainer>
			<MainHeading>GUESS THE WORD GAME</MainHeading>
			<Link to='/game'>
				<MainButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					New Game
				</MainButton>
			</Link>
			<SmallHeading> Your High Score : 0 </SmallHeading>
		</PageContainer>
	);
};

export default Intro;
