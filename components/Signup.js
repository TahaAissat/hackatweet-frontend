import styles from '../styles/Login.module.css'
import { Modal } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import { addUser } from '../reducers/users';


function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstname,setFirstName] = useState('')
  console.log(firstname)
  const [username,setUserName] = useState ('')
  const [password , setPassword] = useState ('')
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignup =()=>{
    fetch('http://localhost:3000/users/signup',{
      method:'POST',
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify({firstname,username,password})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(addUser({username:data.username, token:data.token, firstname:data.firstname}))
    })
  }
    return (
    <div style={styles.Signup}>
      <button onClick={showModal}>
        Sign up
      </button>
      <Modal open={isModalOpen} closeIcon={false} footer={true}>
        <input onChange={(e) => setFirstName(e.target.value)} placeholder='Firstname'></input>
        <input onChange={(e) => setUserName(e.target.value)}  placeholder='Username'></input>
        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'></input>
        <button onClick={handleCancel}>x</button>
        <Link href='/home' ><button  onClick={()=> handleSignup()}>Sign up</button></Link>
      </Modal>
    </div>
  );
};

export default Signup;