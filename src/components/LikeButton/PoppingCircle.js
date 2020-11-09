import React from 'react';
import styled, { keyframes } from "styled-components";



export const PoppingCircle = ({ size, color }) => {
    return <Wrapper style={{ width: size, height: size, background: color }} />
}

const scale = keyframes`
  from {
    transform: scale(0.2); 
  }
  to {
    transform: scale(1);
  }
`;

const opacity = keyframes`
  0% {
    opacity:1;
  }
  90 % {
    opacity:1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
position: absolute;
animation: ${scale} 400ms forwards, ${opacity} 500ms forwards;
border-radius: 50%;
z-index: 0;
`;

export default PoppingCircle;