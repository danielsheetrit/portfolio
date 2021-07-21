import { useState } from 'react';
import { emailSend } from '../service/email-service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [msgFeedback, setMsgFeedback] = useState('')

    const handleChange = ({ target }) => {
        switch (target.name) {
            case 'name':
                setName(target.value)
                break;
            case 'email':
                setEmail(target.value)
                break;
            case 'msg':
                setMsg(target.value)
                break;
        }
    }

    async function handleSubmit(ev) {
        ev.preventDefault();
        setMsgFeedback('Sending...')
        const res = await emailSend(ev.target)
        setMsgFeedback(res.status === 200 ?
            'Sent succesfully ✔' : 'Somthing is wrong...')
            
        clearForm()
    }

    function clearForm() {
        setName('')
        setEmail('')
        setMsg('')
    }

    return (
        <section id="contact-section" className="contact container">
            <div>
                <div className="contact-header">
                    <h1>Contact</h1>
                    <p>{'Please, feel free to contact me,'}<br />
                        {'either work related or just for fun :)'}
                    </p>
                    <div>
                        <a target="_blank" href="https://github.com/danielsheetrit">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/in/daniel-sheetrit-861062212">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                    <div className="seperator-yellow"></div>
                </div>
                <div className="form-container">
                    <form className="flex column" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name-s">Name</label>
                            <input
                                id="name-s"
                                type="text"
                                name="name"
                                placeholder="What's your name?"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email-s">Email</label>
                            <input
                                id="email-s"
                                type="email"
                                name="email"
                                placeholder="Email to get back to..."
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="msg-s">Message</label>
                            <textarea
                                id="msg-s"
                                type="text"
                                name="msg"
                                placeholder="Tell me something..."
                                value={msg}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="submit-btn-container flex align-center">
                            <button>Send</button>
                            <i>{msgFeedback}</i>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}