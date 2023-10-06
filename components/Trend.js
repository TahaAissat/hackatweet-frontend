import styles from '../styles/Home.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { defineList} from '../reducers/tweets'
import { useEffect } from 'react';
import { defineHashtagTweets } from '../reducers/hashtagtweets';
import { useRouter } from 'next/router';

function Trends(){
    const router = useRouter()
    const dispatch = useDispatch()
    const handleFindHastag = (hashtag) =>{
        fetch(`http://localhost:3000/tweets/search/${hashtag.replace('#','')}`)
        .then(response => response.json())
        .then(data =>{
            dispatch(defineHashtagTweets(data.tweets))
            return router.push(`/hashtagtweets/${hashtag}`)
        })
    }
    const tweetList = useSelector((state) => state.tweets.value)
    let hashtag = []
    for(let item of tweetList){
        hashtag.push(item.hashtag)
    }
    const count =[]
    const Hashtag= hashtag.join().split(',')
    Hashtag.forEach(element =>{
        count[element] = (count[element]|| 0)+ 1
    })
    const trendItems = Object.keys(count).map((hashtag, index) => (
        <div key={index}>
        {count[hashtag] > 1 ? ( 
        <><h3 onClick={()=> handleFindHastag(hashtag)}>{hashtag}</h3><p>{count[hashtag]} Tweets</p></>
        ) : (
        <><h3 onClick={()=> handleFindHastag(hashtag)}>{hashtag}</h3><p>{count[hashtag]} Tweet</p></>
        )}
      </div>
    ));
    return(
        <div className={styles.Trends}>
            <h2>Trends</h2>
            {trendItems}
        </div>
    )
}
export default Trends