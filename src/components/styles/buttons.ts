import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainButton = styled(motion.button)`
	font-size: 1.8rem;
	padding: 0.4rem 1rem;
	margin: 0.5rem;
	border-radius: 10px;
	background-color: transparent;
	min-width: 250px;
	color: ${({
		theme: {
			colors: { secondaryBlack },
		},
	}) => secondaryBlack};
	border: 0.5px
		${({
			theme: {
				colors: { secondaryBlack },
			},
		}) => secondaryBlack}
		solid;
	font-family: ${({ theme: { fonts } }) => fonts.primary};
	font-weight: 700;
	text-transform: uppercase;
	cursor: pointer;
	outline: none;
	&:hover {
		background-color: ${({
			theme: {
				colors: { secondaryBlack },
			},
		}) => secondaryBlack};
		color: ${({
			theme: {
				colors: { primaryWhite },
			},
		}) => primaryWhite};
	}
`;
