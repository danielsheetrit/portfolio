import { useState } from 'react';

export function Projects() {

    const [tab, setTab] = useState('front')

    return (
        <section id="project-section" className="projects container">
            <div className="flex column">
                <div className="projects-header">
                    <h1>Projects</h1>
                    <p>Here are some of my latest work, <br />
                        I hope you will enjoy half as much <br />
                        as I enjoyed making it.</p>
                    <div className="seperator"></div>
                </div>
                <article className="flex justify-space-between align-center">
                    <div className="img-side"></div>
                    <div className="desc-side flex column">
                        <h2>Homie</h2>
                        <p>A "MERN" application, clone for Airbnb,<br />
                            very big and wide end2end project,<br />
                            fully responsive in any device. <br />
                        </p>
                        <div className="projects-btn-group">
                            <button
                                className={`left-btn ${tab === 'front' && 'active'}`}
                                onClick={() => setTab('front')}
                            >
                                Front end
                            </button>
                            <button
                                className={tab === 'back' && 'active'}
                                onClick={() => setTab('back')}
                            >
                                Back end
                            </button>
                            <button
                                className={`right-btn ${tab === 'design' && 'active'}`}
                                onClick={() => setTab('design')}
                            >
                                Ui / Ux
                            </button>
                        </div>
                        <div>
                            {tab === 'front' && <p>
                                React.js as view layer with reusable components, <br />
                                Redux as state menagment,<br />
                                Redux-thunk for async activity.<br />
                                Application running on client side.
                            </p>}
                            {tab === 'back' && <p>
                                Node.js for the server while using Express architecture, <br />
                                authentication middlewares for users and hosts,<br />
                                Socket.io for real time communication,<br />
                                MongoDB as data base along with Atlas.
                            </p>}
                            {tab === 'design' && <p>
                                Up to 10 Ui libraries are in use, pixel perfect at any page,<br />
                                colors and spacing discipline along with Sass.<br />
                                Header as major complex css component,<br />
                                using different states to achieve perfection.
                            </p>}
                        </div>
                        <a target="_blank" href="https://homiebnb.herokuapp.com/#/">Go to Homie</a>
                    </div>
                </article>
            </div>
            <div className="shape4-green"></div>
        </section>
    )
}
