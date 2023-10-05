import styles from '../styles/Home.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { defineList} from '../reducers/tweets'
import { useEffect, useState } from 'react';
function Addtweet(){
    const dispatch = useDispatch()
    const [text,setText] = useState('')
    const user = useSelector(state => state.users.value)
    console.log('test',user)
    const handlAddtweet = () =>{
        fetch('http://localhost:3000/users/add',{
      method:'POST',
      headers : {'Content-type' : 'application/json'},
      body:JSON.stringify({username: user.username, texte: text, firstname: user.firstname,hashtag: user.hashtag, token: user.token, date: user.date})
    })

    .then(response => response.json())
    .then(data => {
      console.log(data)
    //   dispatch(defineList({username:data.username, texte:data.texte, firstname:data.firstname}))
    })

    }
    return(
    <div className={styles.Addtweet}>
    <label>
     <h3>Home</h3>
      <textarea onChange={(e) => setText(e.target.value)} name="postContent" rows={4} cols={40} />
    </label>
    <button onClick={()=> handlAddtweet()}>tweet</button>
    </div>
    )
}
export default Addtweet