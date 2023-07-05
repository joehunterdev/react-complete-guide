import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



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

  }, [])

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  async function addMovieHandler(movie) {
    const response = await
      fetch('https://react-http-89102-default-rtdb.europe-west1.firebasedatabase.app/',
        {
          method: 'POST',
          body: JSON.stringify,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    const data = await response.json();
    console.log(data)

  }

  return (
    <React.Fragment>
      <section>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
