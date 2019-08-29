import styled from "@emotion/styled";
import {
  useSpring,
  useTransition,
  useChain,
  animated,
  config
} from "react-spring";
import useOnScreen from "../lib/useOnScreen";
import { useRef, useState } from "react";

const Container = styled("div")`
  margin: 3rem auto;
  pre {
    width: 100%;
    display: block;
    margin: 5rem auto 1rem;
    max-width: 740px;
  }
`;
const Text = styled(animated.span)``;

export default ({ children }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "0px");
  const [reversed, setReversed] = useState(false);

  const animation = useSpring({
    lxnd: 0,
    from: {
      lxnd: 100
    },
    reset: onScreen,
    reverse: onScreen && reversed,
    onRest: () => onScreen && setReversed(!reversed)
  });

  return (
    <animated.span
      ref={ref}
      style={{
        fontVariationSettings: animation.lxnd.interpolate(
          x => `'LXND' ${x.toFixed()}`
        )
      }}
    >
      {children}
    </animated.span>
  );
};
