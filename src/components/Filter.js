import React, { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ setFilter }) => {
    const [localRating, setLocalRating] = useState(0);

    const handleTitleChange = (e) => {
        setFilter((prev) => ({ ...prev, title: e.target.value }));
    };

    const handleRatingChange = (e) => {
        const newRating = parseFloat(e.target.value);
        setLocalRating(newRating);
        setFilter((prev) => ({ ...prev, rating: newRating }));
    };

    return (
        <div className="filter-container">
            <input
                type="text"
                placeholder="Search by title..."
                onChange={handleTitleChange}
                className="filter-input"
                aria-label="Search by title"
            />
            <div className="filter-rating">
                <label htmlFor="ratingSlider">Minimum Rating:</label>
                <input
                    id="ratingSlider"
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={localRating}
                    onChange={handleRatingChange}
                    aria-label="Minimum rating slider"
                />
                <span className="rating-value">{localRating.toFixed(1)}</span>
            </div>
        </div>
    );
};

Filter.propTypes = {
    setFilter: PropTypes.func.isRequired,
};

export default Filter;