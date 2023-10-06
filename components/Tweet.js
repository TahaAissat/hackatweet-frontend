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

const handleLike = () => {
    fetch('http://localhost:3000/tweets/like', {
        method:'POST',
        headers : { 'Content-type' : 'application/json'},
        body : JSON.stringify ({username : props.username , texte : props.texte})
    })
    .then(response => response.json())
    .then (data => {
        console.log(data)
    })
}
    return (
        <>
        <div>
            <p>{props.firstname}@{props.username}-{props.time}</p>
            <p>{props.texte}</p>
            <FontAwesomeIcon onClick={() => handleLike()} icon={faHeart} color='black'/>
            <FontAwesomeIcon onClick={() => handleTrash()} icon={faTrashCan} />
        </div>
        </>
    )
}

export default Tweet