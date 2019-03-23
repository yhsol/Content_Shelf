import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	font-size: 24px;
	margin-top: 30px;
`;

const Text = styled.span`color: ${(props) => props.color};`;

const Message = ({ text, color }) => (
	<Container>
		<Text color={color}>{text}</Text>
	</Container>
);

Message.prototype = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
};

export default Message;
