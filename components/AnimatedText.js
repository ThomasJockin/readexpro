import { useSpring, useTrail, animated, config } from "react-spring";
import useOnScreen from "../lib/useOnScreen";
import { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const list = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  },
  hidden: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const items = {
  hidden: e => ({
    height: "0",
    opacity: 0,
    y: 30
  }),
  visible: {
    height: "1rem",
    opacity: 1,
    y: 0
  }
};

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 90,
  mass: 1
};

const Word = styled(motion.div)`
  display: inline-block;
  margin: 0 0.292em;
`;

const Span = styled(motion.span)`
  display: inline-block;
  position: relative;
  margin: 0 0.11em;
  &:nth-of-type(1) {
    margin-left: -0.14em !important;
  }
`;

const AnimatedText = ({ delay = 0, children }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "0px");
  const letters = children.split(" ");
  return (
    <Word
      href="#download"
      ref={ref}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      variants={list}
    >
      {letters.map((letter, index) => (
        <Span
          letter={letter}
          key={`${letter}-${index}`}
          variants={items}
          transition={spring}
        >
          {letter}
        </Span>
      ))}
    </Word>
  );
};

export default AnimatedText;
