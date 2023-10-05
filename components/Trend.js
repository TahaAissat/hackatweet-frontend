import styles from '../styles/Home.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { defineList} from '../reducers/tweets'
import { useEffect, useState } from 'react';


function Trends(){
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('http://localhost:3000/tweets/latest')
        .then(response=>response.json())
        .then(data =>{
            dispatch(defineList(data.tweets))
        })
    },[])
    const tweetList = useSelector((state) => state.tweets.value)
    const tweetsDisplay = tweetList.map ((e,i) => {
        const OneHashtag = e.hashtag
        tweetList.filter((n)=> n.hashtag !== OneHashtag)
        console.log('repet',tweetList)
            return <>{e.hashtag}<br></br>{OneHashtag.length}<br></br></>
    })
    return(
        <div>
            <h3>Trends</h3>
            <p>{tweetsDisplay}</p>
        </div>
    )
}
export default Trends