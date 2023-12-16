
import { useState, useEffect } from "react";
import { DATA } from "../constants/data";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        if(DATA) {
            setLoading(true);
            setTimeout(() => {
                setMovies(DATA.entries);
                setLoading(false);
            }, 2000)
        }
    }, [])

  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <div className="title">
                <h1>Popular Movies</h1>
            </div> 
            <section>
                <div className="wrapper">
                    {error && (
                        <div className="message error">
                            <p>Something went wrong!</p>
                        </div>
                    ) || loading && (
                        <div className="message loading">
                            <p>Loading...</p>
                        </div>
                    )}
                    {!(error || loading) && <div className="container">                        
                        {movies.map((movie, i) => (
                            (movie.programType === 'movie') && (
                                <div className="movie-container" key={i}>
                                    <a href="#">
                                        <div className="movie">                                            
                                            <div className="movie-banner">
                                                <img src={`${movie.images['Poster Art'].url}`} alt={movie.title} />
                                            </div>
                                            <div className="movie-title">
                                                <p>{movie.title}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        ))}                        
                    </div>}
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Movies