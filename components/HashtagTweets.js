import styles from '../styles/HashtagTweets.module.css';
import Tweet from './Tweet';
import { useDispatch , useSelector } from 'react-redux';
function HashtagTweets ()  {
const dispatch = useDispatch();
const tweetList = useSelector((state) => state.value)

 const tweetListDisplay = []

//const tweetListDisplay = tweetList.map((e,i) => {
//return <Tweet key={i} firstname={e.firstname} username={e.username} texte={e.texte} />
//})
    return (
        <>
        {tweetListDisplay}
        </>
    )
}

export default HashtagTweets;