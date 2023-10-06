import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useDispatch,useSelector } from 'react-redux';
import { deleteTweet } from '../reducers/tweets';
import { useState } from 'react';



function Tweet (props) {
const dispatch = useDispatch();
const user = useSelector((state) => state.users.value)
const style = {}



const handleTrash = () => {
    fetch('http://localhost:3000/tweets/delete',{
        method:'DELETE',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({username : user.username, token:user.token,texte:props.texte})
    })
    .then(response => response.json())
    .then(data => {
        if(data.result){
            dispatch(deleteTweet(props.texte))
        }
    })
}

const handleLike = () => {
    if(!props.isLiked){
        fetch('http://localhost:3000/tweets/addlike',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({username:props.username,texte:props.texte,token:user.token})
        })
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            props.updateLikedTweets()
            style={color:'red'}
        })
    } else {
        fetch('http://localhost:3000/tweets/removeLike',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({username:props.username,texte:props.texte,token:user.token})
        })
        .then(response=>response.json())
        .then(data => {
            props.updateLikedTweets()
            style={color:'black'}
        })
    }
}
    return (
        <>
        <div>
            <p>{props.firstname}@{props.username}-{props.time}</p>
            <p>{props.texte}</p>
            <FontAwesomeIcon onClick={() => handleLike()} icon={faHeart} style={style}/>{props.likes}
            <FontAwesomeIcon onClick={() => handleTrash()} icon={faTrashCan} />
        </div>
        </>
    )
}

export default Tweet