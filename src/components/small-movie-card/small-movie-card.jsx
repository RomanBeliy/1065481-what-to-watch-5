import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Films} from '../../prop-types';

const SmallCard = (props) => {
  const {
    films: {
      titleFilm,
      poster,
    },
    handleMovieCardMouse,
    handleMovieCardClick,
  } = props;

  return (
    <article
      onClick={handleMovieCardClick}
      onMouseOver={handleMovieCardMouse}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={titleFilm} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/:id" className="small-movie-card__link">
          {titleFilm}
        </Link>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  films: Films,
  handleMovieCardClick: PropTypes.func.isRequired,
  handleMovieCardMouse: PropTypes.func.isRequired,
};

export default SmallCard;