import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	font-size: 33px;
	margin-top: 30px;
`;

const Loader = () => {
	return <Container>Loading...</Container>;
};

export default Loader;
