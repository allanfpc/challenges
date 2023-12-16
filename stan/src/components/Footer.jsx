
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div>
                <div>
                    <nav>
                        <div className="nav">
                            <a href="#">Home </a>
                            <a href="#">Terms and Conditions </a>
                            <a href="#">Privacy Policy </a>
                            <a href="#">Collection Statement </a>
                            <a href="#">Help </a>
                            <a href="#">Manage Account </a>                            
                        </div>
                    </nav>
                    <div className="copy">
                        <p>Copyright &#169; 2016 DEMO Streaming. All Rights Reserved.</p>
                    </div>
                </div>

                <div className="toolbar">
                    <div className="socials">
                        <div className="social-link">
                            <a href="#">
                                <img src="/src/assets/social/facebook-white.svg" alt="Facebook" />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="#">
                                <img src="/src/assets/social/twitter-white.svg" alt="Twitter" />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="#">
                                <img src="/src/assets/social/instagram-white.svg" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="downloads">
                        <div className="download-link">
                            <a href="">
                                <img src="/src/assets/store/app-store.svg" alt="App Store" />
                            </a>
                        </div>
                        <div className="download-link">
                            <a href="">
                                <img src="/src/assets/store/play-store.svg" alt="Play Store" />
                            </a>
                        </div>
                        <div className="download-link">
                            <a href="">
                                <img src="/src/assets/store/windows-store.svg" alt="Windows Store" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer