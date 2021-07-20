export function Welcome() {
    return (
        <section id="welcome-section" className="welcome container">
            <div className="flex column justify-center">
                <div className="hero-main flex">
                    <div className="hero-txt-container flex align-center">
                        <div className="flex column">
                            <h1>Hi, I'm Daniel.</h1>
                            <p>
                                I'm a web developer, passionate about <br /> design and coding, and I love what I do.
                                <br /> scroll down to know more. </p>
                            <div className="seperator"></div>
                            <a href="#contact-section">Contact Me!</a>
                        </div>
                    </div>
                    <div className="hero-img-container"></div>
                </div>
            </div>
            <div className="shape1-green"></div>
            <div className="shape2-green"></div>
            <div className="shape3-green"></div>
        </section>
    )
}