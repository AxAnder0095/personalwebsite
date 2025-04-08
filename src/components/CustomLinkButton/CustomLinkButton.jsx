import './CustomLinkButtonStyles.sass'
import {Link} from 'react-router-dom'

function CustomLinkButton() {
    //ToDo: Learn more about animations to make a cool button

    return (
        <div className={'custom-link-wrapper'}>
            <Link to="/" className={'custom-link'}>Link</Link>
        </div>
    )
}

export default CustomLinkButton