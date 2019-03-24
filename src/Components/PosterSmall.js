import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-flow: column;
`;

const TextContainer = styled.div`align-items: flex-end;`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	background-size: cover;
	background-position: center center;
	width: 110px;
	height: 140px;
`;

const Title = styled.span``;

const InfoSection = styled.span`
	display: flex;
	justify-content: space-between;
`;

const Rating = styled.span``;

const Year = styled.span``;

const PosterSmall = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
		<Container>
			<Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : `Nothing Found`} />
			<TextContainer>
				<Title>{title ? `${title.slice(0, 15)}...` : 'Nothing Found'}</Title>
				<InfoSection>
					<Rating>
						<span role="img" arai-label="rating">
							★
						</span>{' '}
						{rating} / 10
					</Rating>
					<Year>{year ? year.slice(0, 4) : 'Nothing Found'}</Year>
				</InfoSection>
			</TextContainer>
		</Container>
	</Link>
);

PosterSmall.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
};

export default PosterSmall;
