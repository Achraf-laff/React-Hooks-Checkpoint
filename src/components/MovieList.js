import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
    if (movies.length === 0) {
        return <p style={{ textAlign: "center" }}>No movies to display.</p>;
    }

    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <div className="movie-card" key={index}>
                    <img
                        src={movie.posterURL}
                        alt={`Poster of ${movie.title}`}
                        className="movie-poster"
                    />
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-description">{movie.description}</p>
                    <div className="movie-rating">⭐ {movie.rating}</div>
                </div>
            ))}
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            posterURL: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default MovieList;