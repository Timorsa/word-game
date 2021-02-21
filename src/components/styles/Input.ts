import styled from 'styled-components';

export const TextFormInput = styled.input`
	padding: 1rem 2rem;
	font-size: 1.5rem;
	margin: 1rem;
	font-family: ${({ theme: { fonts } }) => fonts.branding};
`;
