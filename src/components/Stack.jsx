export function Stack() {
    return (
        <section id="stack-section" className="stack container">
            <div className="flex column">
                <div className="stack-header">
                    <h1>Tech stack</h1>
                    <p>In order to deliver a quality software, I use the most popular technolegies for best results.</p>
                    <div className="seperator-yellow"></div>
                </div>
                <div className="stack-main flex justify-space-between align-center">
                    <article>
                        <h2>Design</h2>
                        <p>Design is an integral part of my craft, building layouts using Adobe Xd and Adobe Ai to Heros, Decorations and Animations.</p>
                        <div className="design-img"></div>
                    </article>
                    <article>
                        <h2>Front end</h2>
                        <p>I'm all about the front, <br /> JavaScript fan, React enthusiastic, Redux for state management.</p>
                        <div className="frontend-img"></div>
                    </article>
                    <article>
                        <h2>Back end</h2>
                        <p>SSR with Next.js, Express architecture within Node.js for the server, and MongoDB as data base.</p>
                        <div className="backend-img"></div>
                    </article>
                </div>
            </div>
        </section>
    )
}
