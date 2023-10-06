import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useDispatch} from 'react-redux';
import { logout } from '../reducers/users';

function Leftside(){
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logout())
    }
    return(
        <div className={styles.Leftside}>
        <Link href='/home'><Image className={styles.Logo} src='/logo.png'width={100} height={100}/></Link>
        <Link href='/' ><button onClick={()=> handleLogout()}>Logout</button></Link>
        </div>
    )
}
export default Leftside;