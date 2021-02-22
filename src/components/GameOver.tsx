import React, { useState } from 'react';
import {
	PageContainer,
	MainHeading,
	SecondaryHeading,
	MainButton,
	TextFormInput,
} from './styles';

const GameOver = () => {
	const [name, setName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	return (
		<PageContainer>
			<MainHeading>Game Over</MainHeading>
			<SecondaryHeading>your score : 250 </SecondaryHeading>
			<TextFormInput
				type='text'
				value={name}
				placeholder='Full Name'
				onChange={(e) => setName(e.target.value)}
			/>
			<TextFormInput
				type='phone'
				value={phone}
				placeholder='Phone Number'
				onChange={(e) => setPhone(e.target.value)}
			/>
			<MainButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
				Submit
			</MainButton>
			<MainButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
				New Game
			</MainButton>
		</PageContainer>
	);
};

export default GameOver;
