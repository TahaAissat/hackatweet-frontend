import styles from '../styles/Home.module.css';
import Leftside from '../components/Leftside';
import LatestTweets from './LatestTweets';

function Home() {
  return (
    <div className={styles.Home_page}>
        <Leftside/>
        <LatestTweets/>
    </div>
  );
}

export default Home;
