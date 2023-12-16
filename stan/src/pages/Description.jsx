
import { useEffect, useState } from "react";
import { DATA } from "../constants/data";
import { useLoaderData } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Description = () => {
    
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const title = useLoaderData();

    useEffect(() => {

        if(title) {
            setLoading(true);
            const findContent = DATA.entries.find((data) => (
                data.title === title
            ))
            if(findContent) {
                setTimeout(() => {
                    setContent(findContent);
                    setLoading(null);
                }, 2000)
            }
        }

    }, [])
    console.log(content)
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
                    <div className="description-container">
                       {content && (
                        <div className="description">
                            <div className="description-banner">
                                <img src={content.images["Poster Art"].url} alt={content.title} />
                            </div>                            
                            <div className="description-info">
                                <div className="description-title">
                                    <p>{content.title}</p>
                                    <div className="description-type lg">
                                        <p>({content.programType})</p>
                                    </div>
                                </div>
                                <div className="description-body">
                                    <div className="description-text">
                                        <p>{content.description}</p>
                                    </div>
                                    
                                    <div className="description-year">
                                        <p>Year: {content.releaseYear}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       )}
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Description