import { useEffect } from 'react'

import { AppHeader } from '../components/AppHeader'
import { Welcome } from '../components/Welcome'
import { Stack } from '../components/Stack'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export function Page() {

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset >= 50) {
                document.body.classList.add('header-change-on')
            } else {
                document.body.classList.remove('header-change-on')
            }
        }
    }, [])

    return (
        <div>
            <AppHeader />
            <Welcome />
            <Stack />
            <Projects />
            <Contact />
        </div>
    )
}
