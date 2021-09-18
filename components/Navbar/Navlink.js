import React from "react";
import { useSpring, animated } from "react-spring";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navlink({
  children,
  href = "google.com",
  onClick = null,
  className = "",
}) {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 200 } }));
  return (
    <>
    <animated.a
      className={classNames("glass-button px-5 py-3 mx-4 my-1 rounded-lg z-40", className)}
      href={href}
      onClick={onClick}
      style={{ transform: y.to((v) => `translateY(${v}%`) }}
      onMouseEnter={() => set({ y: 10 })}
      onMouseLeave={() => set({ y: 0 })}
    >
      <span className="z-40">
        {children}
    </span>
      
    </animated.a>
    </>
  );
}

export default Navlink;
