import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	font-size: 24px;
	margin-top: 30px;
	color: ${(props) => props.color};
`;

const Loader = ({ children, color }) => {
	return <Container color={color}>{children}</Container>;
};

Loader.porpTypes = {
	color: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default Loader;
