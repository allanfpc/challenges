import { useEffect, useState } from "react"
import { DATA } from "../constants/data";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Series = () => {
    
    const [series, setSeries] = useState([]);
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(null);
    
    console.log(series)

    useEffect(() => {
        if(DATA) {
            setLoading(true);
            setTimeout(() => {
                setSeries(DATA.entries);
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
                <h1>Popular Series</h1>
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
                    <div className="categories">
                        {!(error || loading) && <div className="container">                        
                            {series.map((serie, i) => (
                                (serie.programType === 'series') && (
                                    <div className="serie-container" key={i}>
                                        <a href={`/description/${serie.title}`}>
                                            <div className="serie">                                            
                                                <div className="serie-banner">
                                                    <img src={`${serie.images['Poster Art'].url}`} alt={serie.title} />
                                                </div>
                                                <div className="serie-title">
                                                    <p>{serie.title}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    )
                                ))}                        
                            </div>
                        }                                                 
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Series