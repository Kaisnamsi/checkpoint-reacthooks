import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter'
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterURL: "https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterURL: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterURL: "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
    rating: 4,
  },
  {
    id: 4,
    title: "The Godfather Part II",
    description: "From Best 10 Movies",
    posterURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41V2AB34KCL._AC_UF894,1000_QL80_.jpg",
    rating: 3
  },
  {
    id: 5,
    title: "Schindler's List",
    description: "From Best 10 Movies",
    posterURL: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    rating: 4,
  },
  {
    id:6,
    title: "The Lord of the Rings: The Return of the King",
    description: "From Best 10 Movies",
    posterURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
    rating: 5,
  },
  {
    id:7,
    title: "Pulp Fiction",
    description: "From Best 10 Movies",
    posterURL: "https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg",
    rating: 4,
  },
  {
    id:8,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "From Best 10 Movies",
    posterURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
      rating: 3,
    },
    {
id:9,
      title: "The Good, the Bad and the Ugly",
      description: "From Best 10 Movies",
      posterURL: "https://kinolorber.com/media_cache/userFiles/uploads/products/the-good-the-bad-and-the-ugly-no-slipcase/full/B08TQFXFVH.MAIN.jpg",
      rating: 2,
    },
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

  const handleAddMovie = movie => {
    setMovies([...movies, movie]);
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
      <button onClick={() => handleAddMovie({ id: movies.length + 1, title: 'New Movie', description: '', posterURL: '', rating: 0 })}>
        Add Movie
      </button>
    </div>
  );
};

export default App;