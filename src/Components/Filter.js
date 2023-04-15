import React from 'react';
import { Link } from 'react-router-dom';

const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <label>
        Title:
        <input type="text" value={titleFilter} onChange={onTitleChange} />
      </label>
      <label>
        Rating:
        <select value={ratingFilter} onChange={onRatingChange}>
          <option value="">All</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </label>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Filter;
