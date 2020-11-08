import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";

const Stats = () => {
    const { numLikes, numRetweets } = useContext(TweetContext);
    return (
        <StatsDiv><Bolded>{numRetweets} </Bolded>&nbsp; <Grey>Retweets</Grey>&nbsp; &nbsp; &nbsp; <Bolded>{numLikes} </Bolded>&nbsp; <Grey>Likes</Grey></StatsDiv>
    )
}

const StatsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const Bolded = styled.span`
font-weight: bold;
`;

const Grey = styled.span`
color: grey;`

export default Stats;