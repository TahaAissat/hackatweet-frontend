import styles from '../styles/Login.module.css';
import Signin from '../components/Signin'
import Signup from '../components/Signup'
function Login() {
  return (
    <div className={styles.login_page}>
      <img src='/image.png' className={styles.img}></img>
        <div className={styles.cardLog}>
          <img src='/logo.png' className={styles.logo}/>
          <div className={styles.cardText}>
          <h1>See What's happening</h1>
          <h5>Join Hackatweet today</h5>
          <Signup/>
          <p className={styles.p}>Already have an account?</p>
          <Signin/>
        </div>
        </div>
    </div>
  );
}

export default Login;