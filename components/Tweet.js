import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'


function Tweet (props) {
    return (
        <>
        <div>
            <p>{props.firstname}@{props.username}-{props.time}</p>
            <p>{props.texte}</p>
            <FontAwesomeIcon icon={faHeart} color='white'/>
            
        </div>
        </>
    )
}

export default Tweet