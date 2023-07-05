import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [])

 

  const fetchMoviesHandler = useCallback(async () => {
    //Loading
    setIsLoading(true);
    setError(null);

    try {
      // With await
      const response = await fetch('https://swapi.py4e.com/api/films/');
      //statusCode !== 200
      if (!response.ok) {
        throw new Error("Status code: " + response.statusCode)
      }

      const data = await response.json();
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false) // regardless we need to stop loading

  },[])


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loaading...</p>}
        {!isLoading && error && <p>Heres some error stuff</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
