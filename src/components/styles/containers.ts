import styled from 'styled-components';
import { elevation, below } from '../../theme';
import { motion } from 'framer-motion';

export const PageContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const WordContainer = styled(motion.div)`
	display: flex;
	margin: 1rem auto;
	justify-content: center;
	width: 80%;
	${below.medium`
		margin: .2rem;
		width: 100%;
	`}
`;

export const CharCard = styled(motion.div)`
	font-size: 5.2rem;
	font-family: ${({
		theme: {
			fonts: { branding },
		},
	}) => branding};
	margin: 1rem;
	padding: 3rem;
	align-items: center;
	justify-content: center;
	${elevation[1]};
	&:hover {
		${elevation[2]};
	}
	${below.medium`
		margin: .2rem;
		font-size: 1rem;
		padding: .8rem;

	`};
`;

export const SolutionCharCard = styled(CharCard)`
	font-size: 4.2rem;
	padding: 2.5rem;
	cursor: pointer;
	${below.medium`
		margin: .2rem;
		font-size: 1.2rem;
		padding: 1rem;

	`};
`;
