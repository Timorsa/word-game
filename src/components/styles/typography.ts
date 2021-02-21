import styled from 'styled-components';
import { below } from '../../theme';

export const MainHeading = styled.h1`
	font-size: 4.8rem;
	text-align: center;
	font-family: ${({ theme: { fonts } }) => fonts.branding};
	color: ${({
		theme: {
			colors: { secondaryBlack },
		},
	}) => secondaryBlack};
`;

export const SecondaryHeading = styled.h2`
	font-size: 2.4rem;
	text-align: center;
	font-family: ${({ theme: { fonts } }) => fonts.branding};
	color: ${({
		theme: {
			colors: { secondaryBlack },
		},
	}) => secondaryBlack};
`;

export const SmallHeading = styled.h3`
	font-size: 1.2rem;
	margin-top: 1.5rem;
	text-align: center;
	font-family: ${({ theme: { fonts } }) => fonts.primary};
	text-transform: uppercase;
	color: ${({
		theme: {
			colors: { secondaryBlack },
		},
	}) => secondaryBlack};
`;
