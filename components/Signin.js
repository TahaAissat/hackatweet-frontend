import styles from '../styles/Login.module.css'
import { Modal } from 'antd';
import { useState } from 'react';
import Link from 'next/link';

function Signin() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignin =()=>{
    
  }
    return (
    <div style={styles.Signin}>
      <button onClick={showModal}>
        Sign in
      </button>
      <Modal open={isModalOpen} closeIcon={false} footer={true}>
        <input placeholder='Username'></input>
        <input placeholder='Password'></input>
        <button onClick={handleCancel}>x</button>
        <Link href='/home' onClick={()=> handleSignin()}> Sign in</Link>
      </Modal>
    </div>
  );
};

export default Signin;