import styles from '../styles/HashtagTweets.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { defineHashtagTweets } from '../reducers/hashtagtweets';



function SearchTweet () {
const dispatch = useDispatch()
const [searchText,setSearchText] = useState('')


const handleSearch = () => {
    fetch(`http://localhost:3000/tweets/search/${searchText}`)
    .then(response => response.json())
    .then(data => {
        dispatch(defineHashtagTweets(data.tweets))
    })
}


    return (
        <>
        <textarea onChange = {(e) => setSearchText(e.target.value) } rows={4} cols={40} />
        <button className={styles.buttonAdd} onClick={() => handleSearch()}>Search</button>
        </>
    )
}

export default SearchTweet