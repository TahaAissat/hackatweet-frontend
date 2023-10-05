import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
function Leftside(){

    const handleLogout = () =>{
        
    }
    const handleRefresh = () =>{
        <Link href='/home'/>
    }

    return(
        <div className={styles.Leftside}>
        <Image className={styles.Logo} src='/logo.png'width={100} height={100} onClick={()=> handleRefresh()} />
        <button onClick={()=> handleLogout()}>Logout</button>
        </div>
    )
}
export default Leftside;