import './LeftSideNavStyles.sass'
import {Link} from 'react-router-dom'
import CustomLinkButton from "./CustomLinkButton/CustomLinkButton.jsx";

function LeftSideNav() {
    return (
        <>
            <div className={'left-side-container'}>
                <div className={'left-title-wrapper'}>
                    <p className={'left-title'}>balexander310@yahoo.com</p>
                </div>
                <div className={'personal-links mt-4'}>
                    <h5>Social Media</h5>
                    <div className={'links'}>
                        <Link className={'per-link'} to="https://github.com/AxAnder0095">Github</Link>
                        <Link className={'per-link'} to="https://www.linkedin.com/in/alexander-brown-543337216/">Linkedin</Link>
                    </div>
                </div>
                {/*<div className={'more-about mt-4'}>*/}
                {/*    <h5>About Me</h5>*/}
                {/*    <CustomLinkButton />*/}
                {/*    /!*<Link className={'about-link'} to="/programming-journey">Programming Journey</Link>*!/*/}
                {/*    /!*<Link className={'about-link'} to="/">Fitness Journey</Link>*!/*/}
                {/*    /!*<Link className={'about-link'} to="/">Favorite Games</Link>*!/*/}
                {/*</div>*/}

            </div>
        </>
    )
}

export default LeftSideNav;