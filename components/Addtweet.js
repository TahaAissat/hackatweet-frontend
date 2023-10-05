import styles from '../styles/Home.module.css'
import { useDispatch, useSelector} from 'react-redux';
function Addtweet(){
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users.value)
    const handlAddtweet = () =>{
        fetch('http://localhost:3000/users/add',{
      method:'POST',
      headers : {'Content-type' : 'application/json'},
      body:JSON.stringify({username: user.username,password: user.password})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(addUser({username:data.username, token:data.token}))
    })
    }
    return(
    <div className={styles.Addtweet}>
    <label>
     <h3>Home</h3>
      <textarea onChange={(e) => setUserName(e.target.value)} name="postContent" rows={4} cols={40} />
    </label>
    <button onClick={()=> handlAddtweet()}>tweet</button>
    </div>
    )
}
export default Addtweet