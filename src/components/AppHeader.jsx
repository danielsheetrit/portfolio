import { useState } from 'react'
import { ClickAwayListener } from '@material-ui/core'

import logo from '../assets/img/logo.svg'
import faClose from '../assets/img/fa-close.svg'
import faOpen from '../assets/img/fa-open.svg'

export function AppHeader() {

    const [activeClass, setActiveClass] = useState('');

    return (
        <header className="container">
            <ClickAwayListener
                onClickAway={() => setActiveClass('')}
            >
                <div className="flex justify-space-between align-center">
                    <div className="logo-container">
                        <img src={logo} />
                    </div>
                    <nav className={`${activeClass} flex align-center`}>
                        <div className="fa-container close">
                            <div className="fa close">
                                <img
                                    onClick={() => setActiveClass('')}
                                    src={faClose}
                                />
                            </div>
                        </div>
                        <div><a href="#welcome-section">Welcome</a></div>
                        <div><a href="#stack-section">Tech stack</a></div>
                        <div><a href="#project-section">Projects</a></div>
                        <div><a href="#contact-section">Contact</a></div>
                    </nav>
                    <div className="fa-container open">
                        <div className="fa open">
                            <img
                                onClick={() => setActiveClass('active')}
                                src={faOpen}
                            />
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
        </header>
    )
}