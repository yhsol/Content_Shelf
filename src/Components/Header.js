import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`display: flex;`;

const HeaderTitle = styled.div`font-size: 24px;`;

const HeaderNav = styled.ul`display: flex;`;

const HeaderItem = styled.li``;

const SLink = styled(Link)`
	
`;

export default () => (
	<Header>
		<HeaderTitle>
			<SLink to="/">Content_Shelf</SLink>
		</HeaderTitle>
		<HeaderNav>
			<HeaderItem>
				<SLink to="/movie">Movie</SLink>
			</HeaderItem>
			<HeaderItem>
				<SLink to="/tv">Tv</SLink>
			</HeaderItem>
			<HeaderItem>
				<SLink to="/search">Search</SLink>
			</HeaderItem>
		</HeaderNav>
	</Header>
);
