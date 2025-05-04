import React, { useState } from "react";
import PropTypes from "prop-types";

const MovieCard = ({ addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: name === "rating" ? Number(value) : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMovie.title && newMovie.posterURL) {
            addMovie(newMovie);
            setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
        } else {
            alert("Please fill in at least the title and poster URL.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-movie-form">
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={newMovie.title}
                onChange={handleChange}
                className="movie-input"
                aria-label="Movie title"
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={newMovie.description}
                onChange={handleChange}
                className="movie-input"
                aria-label="Movie description"
            />
            <input
                type="text"
                name="posterURL"
                placeholder="Poster URL"
                value={newMovie.posterURL}
                onChange={handleChange}
                className="movie-input"
                aria-label="Movie poster URL"
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={newMovie.rating}
                onChange={handleChange}
                min="0"
                max="10"
                step="0.1"
                className="movie-input"
                aria-label="Movie rating"
            />
            <button type="submit" className="add-movie-button">Add Movie</button>
        </form>
    );
};

MovieCard.propTypes = {
    addMovie: PropTypes.func.isRequired,
};

export default MovieCard;