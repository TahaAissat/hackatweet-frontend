import styles from '../styles/LatestTweets.module.css'
import Tweet from './Tweet'
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { defineList } from '../reducers/tweets';

function LatestTweets ()  {
const dispatch = useDispatch()

// Fetch à l'initialisation du composant
useEffect(() => {
    fetch('http://localhost:3000/tweets/latest')
    .then(response=>response.json())
    .then(data =>{
        dispatch(defineList(data.tweets))
    })
},[])

const tweetList = useSelector((state) => state.tweets.value)
console.log(tweetList)

// Mise en place des tweet a afficher
const tweetsDisplay = tweetList.map (e => {
    return <Tweet firstname={e.firstname} username={e.username} texte={e.texte} />
})

    
return (
    <>
    {tweetsDisplay}
    </>
)
}

export default LatestTweets