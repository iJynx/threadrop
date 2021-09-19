import React from 'react'
import { useSpring, animated } from "react-spring";

function classNames(...args) {
    return args.filter(Boolean).join(' ')
}


function AnimatedObject({ children, href, className, onClick }) {
    const [{ y }, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 200 } }));
    return (
        <animated.div
            className={classNames("", className)}
            href={href}
            onClick={onClick}
            style={{ transform: y.to((v) => `translateY(${v}%`) }}
            onMouseEnter={() => set({ y: 10 })}
            onMouseLeave={() => set({ y: 0 })}
        >
            {children}
        </animated.div>
    )
}

export default AnimatedObject;
