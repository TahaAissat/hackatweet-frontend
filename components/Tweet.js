import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { deleteTweet } from '../reducers/tweets';


function Tweet (props) {
const dispatch = useDispatch();

const handleTrash = () => {
    fetch('http://localhost:3000/tweets/delete',{
        method:'DELETE',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({texte:props.texte})
    })
    .then(response => response.json())
    .then(data => {
        if(data.result){
            dispatch(deleteTweet(props.texte))
        }
    })
}
    return (
        <>
        <div>
            <p>{props.firstname}@{props.username}-{props.time}</p>
            <p>{props.texte}</p>
            <FontAwesomeIcon icon={faHeart} color='white'/>
            <FontAwesomeIcon onClick={() => handleTrash()} icon={faTrashCan} />
        </div>
        </>
    )
}

export default Tweet