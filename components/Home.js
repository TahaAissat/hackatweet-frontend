import styles from '../styles/Home.module.css';
import Leftside from '../components/Leftside';
import LatestTweets from './LatestTweets';
import Addtweet from './Addtweet';
import Trends from './Trend';
import { useSelector } from 'react-redux';

function Home() {
  const user  = useSelector(state=> state.users.value)
  console.log(user)
  return (
    <div className={styles.Home_page}>
      <div>
        <Leftside/>
        </div>
        <div>
          <Addtweet/>
          <LatestTweets/>
        </div>
        <Trends/>
    </div>
  );
}

export default Home;
