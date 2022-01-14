import React, { useState } from 'react'
import MovieList from './components/MovieList';
import { Movies } from './components/Movies';


const App = () => {
  const [movies, setMovies] = useState ([...Movies]);
  const [searchValue, setSearchValue] = useState ('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
      let result = Movies.filter(movie => movie.Title.toLowerCase().includes(searchValue.toLowerCase()))
      setMovies (result)
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  }

  const rating = (e) => {
    let movieRating = Movies.filter(movie => movie.Rating === Number(e.target.value))
    setMovies (movieRating)
  }


  return (
    <div>
      <header className='header'>
        <h1>MOVIVY</h1>
        <form onSubmit={handleOnSubmit}>
        <input className='search' 
               type='search'
               placeholder='Search...'
               value={searchValue}
               onChange={handleOnChange} />
        </form>
        <select className='rating' onChange={rating}>
          <option> Rating: </option>
          <option value='1'> 1 </option>
          <option value='2'> 2 </option>
          <option value='3'> 3 </option>
          <option value='4'> 4 </option>
          <option value='5'> 5 </option>
        </select>       
      </header>
      <div>
        <MovieList movies = {movies}/>     
      </div>
    </div>
  
  )
}

export default App
