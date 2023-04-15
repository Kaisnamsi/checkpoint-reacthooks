import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import { useState } from 'react';
import Filter from './Components/Filter';
const App = () => {
  const [movies, setMovies] = useState([
    
      <BrowserRouter>
        <div className="App">
          <Route exact path="/">
            <MovieList movies={movies} />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails movies={movies} />
          </Route>
        </div>
      </BrowserRouter>
      ,{
    id: 1,
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailerLink: 'https://www.youtube.com/embed/6hB3S9bIaco',
    rating: 5,
    year: 1994,
    genre: ['Drama'],
    duration: 142,
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
  },
  {
    id: 2,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
    trailerLink: 'https://www.youtube.com/embed/sY1S34973zA',
    rating: 3,
    year: 1972,
    genre: ['Crime', 'Drama'],
    duration: 175,
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    rating: 5,
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    duration: 152,
    posterURL: 'https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg',
  },
  {
    id: 4,
    title: '12 Angry Men',
    director: 'Sidney Lumet',
    description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    trailerLink: 'https://www.youtube.com/embed/_13J_9B5jEk',
    rating: 4,
    year: 1957,
    genre: ['Crime', 'Drama'],
    duration: 96,
    posterURL: '',
  },
  {
    id: 5,
    title: 'Schindler\'s List',
    director: 'Steven Spielberg',
    description: 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.',
    trailerLink: 'https://www.youtube.com/embed/gG22XNhtnoY',
    rating: 3,
    year: 1993,
    genre: ['Biography', 'Drama', 'History'],
    duration: 195,
    posterURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg',
  },
  {
    id: 6,
    title: 'Inception',
    director: 'Christopher Nolan',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
    rating: 4,
    year: 2010,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    duration: 148,
    posterURL: '',
  },
  {
    id: 7,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    trailerLink: 'https://www.youtube.com/embed/V75dMMIW2B4',
    rating: 4,
    year: 2001,
    genre: ['Action', 'Adventure', 'Drama'],
    duration: 178,
    posterURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg'
  },
  
  {
    id: 8,
    title: 'The Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    trailerLink: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    rating: 2,
    year: 1999,
    genre: ['Action', 'Sci-Fi'],
    duration: 136,
    posterURL: ''
  }
  
  ]);
  

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = e => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = e => {
    setRatingFilter(e.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const ratingMatch = ratingFilter === '' || movie.rating === parseInt(ratingFilter);
    return titleMatch && ratingMatch;
  });

  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleFormChange = e => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMovie = e => {
    e.preventDefault();
    const id = movies.length + 1;
    const movie = { ...newMovie, id };
    setMovies([...movies, movie]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
    setShowForm(false);
  };

  return (
    <div>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
      {showForm ? (
        <form onSubmit={handleAddMovie}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newMovie.title}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newMovie.description}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="posterURL">Poster URL</label>
            <input
              type="text"
              id="posterURL"
              name="posterURL"
              value={newMovie.posterURL}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              name="rating"
              value={newMovie.rating}
              onChange={handleFormChange}
              required
            >
              <option value="">-- Choose a rating --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit">Add Movie</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Movie</button>
      )}    </div>)}
export default App