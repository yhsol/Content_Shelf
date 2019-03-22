import React from 'react';
import PropTypes from 'prop-types';

// children 은 예약된 react prop 이다.
const Section = ({ title, children }) => {
	return <div />;
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default Section;
