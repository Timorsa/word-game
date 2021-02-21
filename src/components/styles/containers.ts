import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled.div`
	width: 100vw;
	height: 100vh;
`;

export const IntroContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
