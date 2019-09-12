import { useContext } from "react";
import useTypeChoices from "../lib/useTypeChoices";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import useVariableFont from "react-variable-fonts";
import Markdown from "markdown-to-jsx";
import texts from "../data/texts";
import Page from "./Page";
import RangeSlider from "./RangeSlider";

const initialSettings = {
  LXND: 0
};

const Tester = ({ weight, lxnd }) => {
  const { axis, setAxis, customStyles } = useContext(useTypeChoices);

  switch (weight) {
    case "default":
      lxnd = 0;
      break;
    case "Regular":
      lxnd = 0;
      break;
    case "Deca":
      lxnd = 0;
      break;
    case "Exa":
      lxnd = 40;
      break;
    case "Giga":
      lxnd = 56;
      break;
    case "Mega":
      lxnd = 64;
      break;
    case "Peta":
      lxnd = 72;
      break;
    case "Tera":
      lxnd = 80;
      break;
    case "Zetta":
      lxnd = 100;
      break;
    default:
      lxnd = axis.LXND;
      break;
  }

  const style = {
    fontVariationSettings: `'LXND' ${lxnd}`
  };

  const exampleCSS = `h1, p { font-variation-settings: 'LXND' ${axis.LXND}; }`;
  return (
    <Container>
      {weight && (
        <Weight style={{ ...style }}>
          {weight} • LXND {lxnd}
        </Weight>
      )}
      <Title style={{ ...style }}>LEXEND</Title>

      {!weight && (
        <Controls>
          <p style={{ ...style }} />
          <label htmlFor="lxnd-axis">Variable Width + Bounding Box</label>
          <RangeSlider
            id="lxnd-axis"
            type="range"
            min="0"
            max="100"
            value={axis.LXND}
            onChange={({ target }) => setAxis({ LXND: target.value })}
          />
          <label htmlFor="lxnd-axis">Variable Font Settings for CSS</label>
          <pre>
            <code>{exampleCSS}</code>
          </pre>
        </Controls>
      )}
    </Container>
  );
};

const Container = styled("section")`
  padding: 1.618rem 1.618rem;
`;
const Weight = styled("span")`
  text-transform: uppercase;
  font-size: 80%;
  letter-spacing: 2px;
`;

const Controls = styled("nav")`
  max-width: 800px;
  padding: 1rem 0.618rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 1.618rem;
  @media (max-width: 960px) {
    max-width: 100%;
  }
  input {
    cursor: grab;
    width: 100%;
  }
  label {
    display: block;
    text-transform: uppercase;
    font-size: 0.718rem;
    letter-spacing: 2px;
    margin: 2.618rem 0 0.618rem;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const H1 = styled("h1")`
  font-size: 5.4vw !important;
  line-height: 1;
  margin: 0;
  padding: 0;
  font-weight: normal;
  span {
    display: inline-block;
    margin: 2px;
    border: 1px dashed rgba(0, 0, 0, 0.12);
  }
  & + p {
    margin-left: 0.392rem;
  }
  @media (max-width: 960px) {
    font-size: 12vw !important;
  }
`;

const Title = ({ children, ...props }) => (
  <H1>
    {children.split("").map((child, i) => (
      <span key={`${child}-${i}`} {...props}>
        {child}
      </span>
    ))}
  </H1>
);

export default Tester;
