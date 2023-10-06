import styles from '../styles/HashtagTweets.module.css';
import Tweet from './Tweet';
import { useDispatch , useSelector } from 'react-redux';


function HashtagTweets ()  {
const dispatch = useDispatch();
const tweetList = useSelector((state) => state.hashtagtweets.value)


const tweetListDisplay = tweetList.map((e,i) => {
    console.log('e',e)
return <Tweet key={i} firstname={e.firstname} username={e.username} texte={e.texte} hashtag={e.hashtag}/>
})
    return (
        <>
        {tweetListDisplay}
        </>
    )
}

export default HashtagTweets;