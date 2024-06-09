import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FadeInAnimation = ({
  children,
  wrapperElement: Component = "div", // Renamed to `Component` for better clarity
  direction = null,
  delay = 0,
  ...props
}) => {
  const compRef = useRef(null); // Use the ref directly
  const distance = 200;
  let fadeDirection;

  // Set fadeDirection based on the direction prop
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }

  useEffect(() => {
    // Apply GSAP animation
    gsap.from(compRef.current, {
      ...fadeDirection,
      opacity: 0,
      duration: 1, // Add duration here instead of a separate parameter
      delay,
    });
  }, [fadeDirection, delay]);

  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeInAnimation;
