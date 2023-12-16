import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <div>
                <div className="title">
                    <h1>Popular Titles</h1>
                </div> 
                <section>
                    <div className="wrapper">
                        <div className="categories">
                            <a href="/series">
                                <div className="categories__item">
                                    <div className="categories__item--title">
                                        <h2>Series</h2>
                                    </div>
                                    <div className="categories__item--banner">
                                        <img src="/src/assets/placeholder.png" alt="series" />
                                    </div>
                                    <div className="categories__item--desc">
                                        <p>Popular Series</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/movies">
                                <div className="categories__item">
                                    <div className="categories__item--title">
                                        <h2>Movies</h2>
                                    </div>
                                    <div className="categories__item--banner">
                                        <img src="/src/assets/placeholder.png" alt="movies" />
                                    </div>
                                    <div className="categories__item--desc">
                                        <p>Popular Movies</p>
                                    </div>  
                                </div>
                            </a>                              
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Home