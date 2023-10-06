import styles from '../styles/LatestTweets.module.css'
import Tweet from './Tweet'
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { defineList } from '../reducers/tweets';

function LatestTweets ()  {
const dispatch = useDispatch()
const tweetList = useSelector((state) => state.tweets.value)
const user = useSelector((state) => state.users.value)
const [likedTweets,setLikedTweets] = useState([])


// Fetch à l'initialisation du composant
useEffect(() => {
    fetch('http://localhost:3000/tweets/latest')
    .then(response=>response.json())
    .then(data =>{
        dispatch(defineList(data.tweets))
    })
},[])

const updateLikedTweets = () => {
   setLikedTweets(tweetList.filter(e => e.likes.includes(user.token)))
}




// Mise en place des tweet a afficher
const tweetsDisplay = tweetList.map ((e,i) => {
    const isLiked = likedTweets.some(data => data.texte === e.texte)
    const timePassed = new Date()-new Date(e.date) 
    console.log('timepassed',timePassed)
    const hours = new Date(timePassed).getHours()
    console.log('hours',hours)
    const minutes = new Date(timePassed).getMinutes()
    console.log('minutes',minutes)
    const seconds = new Date(timePassed).getSeconds()
    console.log('seconds', seconds)
    let time = ''
    if(hours-1>0){
        time = hours + 'hours ago'
        console.log(time)
    } else if (minutes>0){
        time = minutes + 'minutes ago'
        console.log(time)
    } else {
        time = seconds + 'seconds ago'
        console.log(time)
    }
    return <Tweet key={i} updateLikedTweets={updateLikedTweets} isLiked={isLiked} firstname={e.firstname} username={e.username} texte={e.texte} likes={e.likes.length} time={time} />
})

    
return (
    <>
    {tweetsDisplay}
    </>
)
}

export default LatestTweets