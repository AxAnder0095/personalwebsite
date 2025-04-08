import './FooterStyles.sass'
import {Link} from "react-router-dom";

function Footer () {
    return (
        <footer className={'footer-container'}>
            <div className={'footer-wrapper'}>
                <div className={'footer-left'}>
                    <h4 className={'footer-title'}>Social Media</h4>
                    <Link className={'footer-link'} to="/">Github</Link>
                    <Link className={'footer-link'} to="/">Linkedin</Link>
                </div>
                <div className={'footer-right'}>
                    <h4 className={'footer-title'}>Contact</h4>
                    <p className={'contact-info'}>balexander310@yahoo.com</p>
                    <p className={'contact-info'}>630-870-5787</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer