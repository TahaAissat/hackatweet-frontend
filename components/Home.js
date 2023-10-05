import styles from '../styles/Home.module.css';
import Leftside from '../components/Leftside';
import LatestTweets from './LatestTweets';
import Addtweet from './Addtweet';
import Trends from './Trend';

function Home() {
  return (
    <div className={styles.Home_page}>
        <Leftside/>
        <Addtweet/>
        <LatestTweets/>
        <Trends/>
    </div>
  );
}

export default Home;
