import films from '../films';
import FilmCard from '../FilmCard/FilmCard';
import React from 'react';

function FilmsView() {
  return (
    <div className="container">
      <h2>Каталог фильмов</h2>
      {films.map(film => <FilmCard key={film.id} film={film} />)}
    </div>
  )
}

// FilmsRating.propTypes = {}

export default FilmsView;