import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	${reset};
	a {
		text-decoration: none;
		color: inherit;
	}
	* {
		box-sizing: border-box;
	}
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
		background-color: rgba(20, 20, 20, 1);
		color: white;
		padding-top: 60px;
		margin: 0.8rem;
	}
	h1, h2, h3, h4, h5, h6 {
		margin: 0;
		padding: 0;
	}
`;

export default GlobalStyles;
