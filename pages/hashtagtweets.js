import styles from '../styles/HashtagTweets.module.css'
import Leftside from '../components/Leftside';
import HashtagTweets from '../components/HashtagTweets';
import SearchTweet from '../components/SearchTweet'
import Trend from '../components/Trend'

function HashtagTweetsPage () {
    return (
        <div className={styles.Home_page}>
        <div className={styles.Leftside}>
          <Leftside/>
        </div>
        <div className={styles.Addtweet}>
            <SearchTweet/>
            <HashtagTweets className={styles.tweet}/>
        </div>
        <div className={styles.Trends}>
          <Trend/>
        </div>
      </div>
    )
}

export default HashtagTweetsPage;