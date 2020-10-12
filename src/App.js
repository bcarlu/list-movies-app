import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import MovieNotFound from './components/MovieNotFound';

const MOVIES_API = `https://www.omdbapi.com/?apikey=f64fb91c&s=`


function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    let defaultSearch = /super/
    getMovies(MOVIES_API + defaultSearch)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
      setMovies(data.Search)
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      getMovies(MOVIES_API + searchTerm)
      setSearchTerm("")
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <header>
          <input className="search" type="search" placeholder="Write and press enter to search" value={searchTerm} onChange={handleOnChange}/>
        </header>
      </form>
      
      <div className="movie-container">
        {
          movies && movies.length > 0 ? 
          movies.map((movie) => 
            <Movie key={movie.imdbID} {...movie}/>
          )
          : <MovieNotFound />
        }
      </div>
    </>
  );
}

export default App;