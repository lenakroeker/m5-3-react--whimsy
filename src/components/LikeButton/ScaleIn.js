import React from 'react';
import { useSpring, animated } from "react-spring";
import Heart from "./Heart";

export const ScaleIn = ({ children }) => {
    const style = useSpring({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: "scale(1)",
        from: {
            transform: "scale(0.8)",
        },
        config: {
            mass: 5,
            tension: 458,
            friction: 27,
            precision: 0.133,
            velocity: 19
        },
    });

    return <animated.div style={style}>{children}</animated.div>;

}

export default ScaleIn;