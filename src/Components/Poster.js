import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-flow: column;
`;

const ImageContainer = styled.div`align-items: flex-end;`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	background-size: cover;
	background-position: center center;
	width: 140px;
	height: 190px;
	position: absolute;
`;

const Title = styled.span``;

const InfoSection = styled.span`
	display: flex;
	justify-content: space-between;
	padding: 0 5px;
	top: 0;
	position: relative;
`;

const Rating = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
		<Container>
			<ImageContainer>
				<Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : `Nothing Found`} />
				<InfoSection>
					<Rating>
						<span role="img" arai-label="rating">
							★
						</span>{' '}
						{rating} / 10
					</Rating>
					<Year>{year ? year.slice(0, 4) : 'Nothing Found'}</Year>
				</InfoSection>
			</ImageContainer>
			<Title>{title ? `${title.slice(0, 15)}...` : 'Nothing Found'}</Title>
		</Container>
	</Link>
);

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
};

export default Poster;
