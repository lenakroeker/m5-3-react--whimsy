import React, { useState } from 'react';
import avatar from "../../assets/carmen-sandiego.png";
import moment from 'moment';


export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {

    const tweetContents = "Where in the world am I?";
    const displayName = "Carmen Sandiego ✨";
    const username = "carmen-sandiego";
    const avatarSrc = avatar;
    const date = moment().format('h:mm a - MMMM Do YYYY');
    const [numLikes, setNumLikes] = useState(460);
    const [numRetweets, setNumRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);
    const isRetweetedByCurrentUser = isRetweeted;
    const isLikedByCurrentUser = isLiked;

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
        isLiked ?
            setNumLikes(numLikes - 1) :
            setNumLikes(numLikes + 1);
    }

    const handleToggleRetweet = () => {
        setIsRetweeted(!isRetweeted);
        isRetweeted ?
            setNumRetweets(numRetweets - 1) :
            setNumRetweets(numRetweets + 1);
    }


    return (
        <TweetContext.Provider
            value={{
                tweetContents,
                displayName,
                username,
                avatarSrc,
                isRetweetedByCurrentUser,
                isLikedByCurrentUser,
                date,
                numLikes,
                numRetweets,
                handleToggleLike,
                handleToggleRetweet,
            }}>
            {children}
        </TweetContext.Provider>
    );
};


