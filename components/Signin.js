import styles from '../styles/Login.module.css'
import { Modal } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from '../reducers/users';

function Signin() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username,setUserName] = useState ('')
    const [password,setPassword] = useState ('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users.value)
    console.log(user)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignin =()=>{
    fetch('http://localhost:3000/users/signin',{
      method:'POST',
      headers : {'Content-type' : 'application/json'},
      body:JSON.stringify({username,password})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(addUser({username:data.username, token:data.token, firstname:data.firstname}))
    })
  }
  
    return (
    <div style={styles.Signin}>
      <button onClick={showModal}>
        Sign in
      </button>
      <Modal open={isModalOpen} closeIcon={false} footer={true}>
        <input onChange={(e) => setUserName(e.target.value)} placeholder='Username'></input>
        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'></input>
        <button onClick={handleCancel}>x</button>
        <Link href='/home'><button onClick={()=> handleSignin()}>Sign in</button></Link>
      </Modal>
    </div>
  );
};

export default Signin;