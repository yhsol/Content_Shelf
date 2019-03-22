import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	z-index: 10;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const HeaderTitle = styled.div`
	font-size: 23px;
	display: flex;
	align-items: center;
`;

// const HeaderMenu = styled.div`
// 	transform: ${(props) => (props.current ? 'rotate(90deg)' : '')};
// 	margin-right: 10px;
// 	transition: transform 0.1s linear;
// `;

const HeaderNav = styled.ul`display: flex;`;

const HeaderItem = styled.li`
	padding: 0 5px;
	height: 60px;
	text-align: center;
	color: ${(props) => (props.current ? '#079992' : 'rgba(255, 255, 255, 8)')};
	font-weight: ${(props) => (props.current ? '600' : '300')};
	font-size: ${(props) => (props.current ? '15px' : '14px')};
	transition-property: color, font-weight, font-size;
	transition-delay: 0.05s;
	transition-timing-function: linear;
`;

const SLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
`;

export default withRouter(({ location: { pathname } }) => (
	<Header>
		<HeaderTitle current={pathname === '/'}>
			<SLink to="/">
				{/* <HeaderMenu current={pathname === '/'}>≡</HeaderMenu> */}
				Content_Shelf
			</SLink>
		</HeaderTitle>
		<HeaderNav>
			<HeaderItem current={pathname === '/movie'}>
				<SLink to="/movie">Movie</SLink>
			</HeaderItem>
			<HeaderItem current={pathname === '/tv'}>
				<SLink to="/tv">Tv</SLink>
			</HeaderItem>
			<HeaderItem current={pathname === '/search'}>
				<SLink to="/search">Search</SLink>
			</HeaderItem>
		</HeaderNav>
	</Header>
));
