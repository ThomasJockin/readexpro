import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
import useHover from "../lib/useHover";

const config = { mass: 0.2, tension: 100, friction: 10 };
const letters = "LEXEND".split("");
const isE = letter => letter === "E";

const list = {
  visible: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  hidden: {
    transition: {
      when: "beforeChildren"
    }
  }
};

const items = {
  hidden: e => ({
    width: e ? 0 : "1.392rem",
    opacity: e ? 0 : 1,
    fontVariationSettings: "'LXND' 0"
  }),
  visible: {
    width: "2rem",
    opacity: 1,
    fontVariationSettings: "'LXND' 100"
  }
};

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 90,
  mass: 1
};

export default () => {
  const [hoverRef, hovering] = useHover();

  return (
    <Logo>
      <motion.a
        href="#download"
        ref={hoverRef}
        initial="hidden"
        animate={hovering ? "visible" : "hidden"}
        variants={list}
      >
        {letters.map((letter, index) => (
          <Span
            key={`${letter}-${index}`}
            custom={letter === "E"}
            variants={items}
            transition={spring}
          >
            {letter}
          </Span>
        ))}
      </motion.a>
    </Logo>
  );
};

const Logo = styled(motion.h1)`
  font-size: 1.4rem;
  cursor: default;
  background: red;
  display: inline-block;
  color: white;
  padding: 0.092em 0.392em;
  margin-left: auto;
  position: relative;
  z-index: 100;
  a {
    color: white;
  }
`;

const Span = styled(motion.span)`
  display: inline-block;
  position: relative;
  &:nth-of-type(4) {
    right: -1px;
  }
`;
