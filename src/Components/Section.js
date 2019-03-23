import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 20px;
	}
`;

const Title = styled.span`
	font-size: 20px;
	display: inline-block;
	margin: 10px 0;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: 50px;
	grid-gap: 10px;
`;

// children 은 예약된 react prop 이다.
// children 은 <div>{children}</div> 과 같이 태그 사이의 값을 전달 받는다.
// 따라서 아래와 같은 경우
// <Section title="">{childrend}</Section> 과 같이 전달한다.
// 그것을 nowPlaying 에 쓴다면 다음과 같이 쓸 수 있다.
// <Section title="Now Playing">{nowPlaying}</Section>
// {nowPlaying} 에서 nowPlaying 이 children 이 되는 것이다.
const Section = ({ title, children }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Grid>{children}</Grid>
		</Container>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default Section;
