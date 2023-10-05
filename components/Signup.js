import styles from '../styles/Login.module.css'
import { Modal } from 'antd';
import { useState } from 'react';
import Link from 'next/link';

function Signup() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignup =()=>{
    
  }
    return (
    <div style={styles.Signup}>
      <button onClick={showModal}>
        Sign up
      </button>
      <Modal open={isModalOpen} closeIcon={false} footer={true}>
        <input placeholder='Firstname'></input>
        <input placeholder='Username'></input>
        <input placeholder='Password'></input>
        <button onClick={handleCancel}>x</button>
        <Link href='/home'  onClick={()=> handleSignup()}> Sign up</Link>
      </Modal>
    </div>
  );
};

export default Signup;