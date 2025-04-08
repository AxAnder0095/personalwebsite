import './NavbarStyels.sass'
import {Link} from 'react-router-dom'
import {useState, useEffect} from "react";

// import {useLocation} from 'react-router-dom'


function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767){
                setShowLinks(false);
            }
            console.log(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);
    }, [])


    return (
        <>
            <header className={'header-container'}>
                <nav className={'nav-container'}>
                    <div className={'return-to-home-icon'}>
                        <Link className={'link'} to='/'>balexander310@yahoo.com</Link>
                    </div>
                    <div className={'navbar-links'} id={showLinks ? 'hidden' : ''}>
                        <Link className={'link'} to='https://animations-feb82.web.app'>Animations</Link>
                        <Link className={'link'} to='https://github.com/AxAnder0095'>Github</Link>
                        <Link className={'link'} to='https://www.linkedin.com/in/alexander-brown-543337216/'>LinkedIn</Link>
                    </div>
                    <div className={'collapse-button-container'}>
                        <button className={'collapse-button'} onClick={() => setShowLinks(!showLinks)}>Open</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;