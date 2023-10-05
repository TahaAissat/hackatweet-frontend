import styles from '../styles/Login.module.css';
import Signin from '../components/Signin'
import Signup from '../components/Signup'

function Login() {
  return (
    <div className={styles.login_page}>
        <h1>See What's happening</h1>
        <h3>Join Hackatweet today</h3>
        <Signup/>
        <p>Already have an account?</p>
        <Signin/>
    </div>
  );
}

export default Login;