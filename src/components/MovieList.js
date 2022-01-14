import React from "react";

const MovieList = (props) => {
    return (
        <div className="movie-container">
            {props.movies.map ((movie, index) => 
            <div className="movie" key={movie.ID}>
                <img src={movie.Poster} alt="movieposter"/>
                <div className="movie-info">
                    <h3>{movie.Title}</h3>
                    <span>{movie.Rating}</span>
                </div>
                <div className="movie-description">
                    <h2>Description:</h2>
                    <p>{movie.Description}</p>
                </div>
            </div>)}
        </div>
    );
};
export default MovieList;