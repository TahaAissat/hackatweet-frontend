import styles from '../styles/Home.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { defineList} from '../reducers/tweets'
import { useEffect, useState } from 'react';

function Addtweet(){

    const dispatch = useDispatch()
    const [text,setText] = useState('')
    const user = useSelector(state => state.users.value)
    // Isolation des #hashtag
    const hashtagTest = /#[a-z0-9]+/gi
    const hashtag = text.match(hashtagTest)


    
    const handlAddtweet = () =>{
        fetch('http://localhost:3000/tweets/add',{
      method:'POST',
      headers : {'Content-type' : 'application/json'},
      body:JSON.stringify({username: user.username, texte: text, firstname: user.firstname, hashtag:hashtag,token:user.token})
    })
    .then(response => response.json())
    .then(data => {
      dispatch(defineList(data.tweets))
      setText('')
    })

    }
    return(
    <div>
    <label>
     <h3>Home</h3>
      <textarea className={styles.area} onChange={(e) => {if(text.length < 280){setText(e.target.value)}}} value={text} name="postContent" rows={4} cols={80} />
    </label>
    <p>{text.length}/280</p>
    <button onClick={()=> handlAddtweet()}>tweet</button>
    </div>
    )
}
export default Addtweet