import React from 'react';
import { useParams , Route } from 'react-router-dom';
import { movies } from './App.js';
import { BrowserRouter } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const selectedMovie = movies.find(movie => movie.id === Number(id));

  return (
    <BrowserRouter>
    <Route path="/movies/:id" component={MovieDetails} />
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>{selectedMovie.description}</p>
      <iframe
        title={selectedMovie.title}
        width="560"
        height="315"
        src={selectedMovie.trailerLink}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p>Director: {selectedMovie.director}</p>
      <p>Year: {selectedMovie.year}</p>
      <p>Genre: {selectedMovie.genre.join(', ')}</p>
      <p>Duration: {selectedMovie.duration} mins</p>
      <p>Rating: {selectedMovie.rating}/10</p>
      <button onClick={() => window.history.back()}>Back to Home</button>
    </div>
    </BrowserRouter>
  );
}

export default MovieDetails;
