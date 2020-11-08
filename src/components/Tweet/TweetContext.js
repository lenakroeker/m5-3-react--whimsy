import React, { useState } from 'react';
import avatar from "../../assets/carmen-sandiego.png";
import moment from 'moment';


export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {

    const tweetContents = "Where in the world am I?";
    const displayName = "Carmen Sandiego ✨";
    const username = "carmen-sandiego";
    const avatarSrc = avatar;
    const isRetweetedByCurrentUser = false;
    const isLikedByCurrentUser = false;
    const date = moment().format('h:mm a - MMMM Do YYYY');
    const [numLikes, setNumLikes] = useState(460);
    const [numRetweets, setNumRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);


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
            }}>
            {children}
        </TweetContext.Provider>
    );
};


