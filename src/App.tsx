import { GlobalStyle, theme } from './theme';
import { ThemeProvider } from 'styled-components';

import { PageContainer } from './components/styles';
import Router from './router';
function App() {
	return (
		<PageContainer>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router />
			</ThemeProvider>
		</PageContainer>
	);
}

export default App;
