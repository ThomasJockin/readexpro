import styled from "@emotion/styled";
import { useTrail, animated } from "react-spring";
import { useState } from "react";
import useHover from '../lib/useHover'

const config = { mass: 0.2, tension: 100, friction: 10 }
const items = "LEXEND".split("")
const isE = letter => letter === "E"

export default () => {

  const [hoverRef, hovering] = useHover()

  const trail = useTrail(items.length, {
    config,
    opacity: hovering ? 1 : 0,
    x: hovering ? 0 : 20,
    width: hovering ? 25 : 0,
    fontVariationSettings: hovering ? "'LXND' 100" : "'LXND' 0",
    from: {
      opacity: 0,
      x: 20,
      width: 0,
      padding: 0,
      fontVariationSettings: "'LXND' 0"
    }
  });

  return (
    <Logo ref={hoverRef}>
      {trail.map(({ x, width, opacity, ...rest }, index) => (
        <Span key={`logo-${items[index]}`} style={{
          x: isE(items[index]) ? x : null,
          width: isE(items[index]) ? width : null,
          opacity: isE(items[index]) ? opacity : null,
          ...rest }}
        >
          {items[index]}
        </Span>
      ))}

    </Logo>
  );
};

const Logo = styled("h1")`
  font-size: 1.4rem;
  cursor: default;
  background: red;
  display: inline-block;
  color: white;
  padding: 0.092em 0.392em;
  margin-left: auto;
  position: relative;
  z-index: 100;
`;

const Span = styled(animated.span)`
  display: inline-block;
  position: relative;
  &:nth-of-type(4) { right: -1px; }
`;
