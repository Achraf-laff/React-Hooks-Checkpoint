import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([
        {
            title: "Inception",
            description: "A mind-bending thriller by Christopher Nolan.",
            posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            rating: 5,
        },
        {
            title: "Interstellar",
            description: "Exploring space and time.",
            posterURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
            rating: 4,
        },
    ]);

    const [filter, setFilter] = useState({ title: "", rating: 0 });

    const addMovie = (newMovie) => {
        if (
            newMovie.title &&
            newMovie.description &&
            newMovie.posterURL &&
            newMovie.rating
        ) {
            setMovies([...movies, newMovie]);
        } else {
            alert("Please fill in all fields before adding a movie.");
        }
    };

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
            movie.rating >= filter.rating
    );

    return (
        <div className="App">
            <h1>My Favorite Movies 🎬</h1>
            <Filter setFilter={setFilter} />
            <MovieList movies={filteredMovies} />
            <h2>Add a New Movie</h2>
            <MovieCard addMovie={addMovie} />
        </div>
    );
}

export default App;