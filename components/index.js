import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Flex = styled("section")`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem auto;
  align-items: flex-start;
`;

export const Right = styled("main")`
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: ${props => props.width || "45%"};
  width: ${props => props.width || "auto"};
  min-width: 400px;
  ${props =>
    props.sticky &&
    css`
      position: sticky;
      top: ${props.top || "1rem"};
    `}
  @media (max-width: 960px) {
    max-width: 100%;
    width: 100%;
    min-width: auto;
    position: static;
  }
`;

export const Left = styled("main")`
  margin: 2.618rem auto;
  padding: 0 1rem;
  max-width: ${props => props.width || "45%"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  ${props =>
    props.sticky &&
    css`
      position: sticky;
      top: ${props.top || "1rem"};
    `}
  @media (max-width: 960px) {
    max-width: 100%;
    position: static;
  }
`;

export const Button = styled("button")`
  -webkit-appearance: none;
  font-family: "Lexend", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  appearance: none;
  border: none;
  border-radius: 3px;
  padding: 0.618em 1em;
  transition: all 300ms ease-in;
  outline: none;
  min-width: 70px;
  background: ${props => (props.started ? "white" : "red")};
  color: ${props => (props.started ? "black" : "white")};
  @media (max-width: 1020px) {
    width: 100%;
    margin-top: 0.392rem;
  }
`;

export const Intro = styled("section")`
  padding: 1rem;
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  h1 {
    font-size: 7.2vw;
    line-height: 1.1;
    margin: 14vh 3.618vw 3.618rem;
    font-weight: normal;
    strong {
      color: red;
      font-weight: normal;
    }
    @media (max-width: 960px) {
      width: 100%;
      font-size: 12vw;
      line-height: 1.2;
      margin-left: 0;
      margin-right: 0;
    }
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    max-width: 60%;
    margin: 1rem auto 0.618rem;
    line-height: 1.5;
  }
  h2 {
    font-size: 3.6rem;
    line-height: 1.4;
    text-align: center;
    @media (max-width: 960px) {
      max-width: 100%;
    }
  }
  h5 {
    margin-bottom: -3.618rem;
    margin-top: 1rem;
    strong {
      color: red;
      font-weight: normal;
    }
  }
  h6 {
    max-width: 30%;
    margin: 0 auto;
    font-variation-settings: "LXND" 20;
    @media (max-width: 960px) {
      max-width: 88%;
    }
    a {
      font-variation-settings: "LXND" 80;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: none;
      &:before {
        content: "⌁";
        margin: 0 0.192rem;
        font-size: 140%;
      }
    }
  }

  p {
    font-variation-settings: "LXND" 10;
    color: rgba(0, 0, 0, 0.76);
    line-height: 1.6;
    font-size: 1.2rem;
    max-width: 800px;
    margin: 2rem auto;
  }
  img {
    display: block;
    max-width: 500px;
  }
  a {
    color: red;
  }
  ul,
  ol {
    max-width: 720px;
    margin: 1.618rem auto;
  }
  blockquote {
    font-weight: normal;
    display: block;
    max-width: 760px;
    background: white;
    padding: 0.618rem 2.618rem;
    margin: 4rem auto 1rem;
    position: relative;
    left: -2rem;
    border: 0.618rem solid red;
    @media (max-width: 960px) {
      max-width: 100%;
      left: 0;
      left: 0;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.618;
    }
    &:before {
      font-weight: normal;
      content: "“";
      font-size: 9.6rem;
      position: absolute;
      top: -4.618rem;
      left: 1.618rem;
      color: black;
    }
    &:after {
      font-weight: normal;
      content: "”";
      font-size: 9.6rem;
      position: absolute;
      bottom: -8.618rem;
      right: 1.618rem;
      color: black;
    }
    img {
      max-width: 400px;
      position: absolute;
      right: -40%;
      bottom: -4%;
      filter: drop-shadow(0.618rem 0.618rem 0.392rem rgba(0, 0, 0, 0.12));
      @media (max-width: 960px) {
        display: none;
        max-width: 220px;
        position: static;
        margin-top: -8rem;
        margin-left: 4rem;
      }
    }
  }
`;
