import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/core";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Banner = styled("h6")`
  background: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin: 0 auto -6.618rem;
  font-size: 0.818rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  strong {
    color: white;
    font-variation-settings: "LXND" 100;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 85%;
    padding: 0 0.292rem;
  }
  @media (max-width: 640px) {
    text-align: left;
  }
`;
export const Flex = styled("section")`
  display: flex;
  margin: ${props => props.margin || "4rem auto"};
  align-items: ${props => props.align || "flex-start"};
  justify-content: ${props => props.justify || "flex-start"};
  max-width: 1440px;
  flex-wrap: ${props => props.wrap || "no-wrap"};
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const Right = styled("main")`
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: ${props => props.width || "720px"};
  width: ${props => props.width || "100%"};
  min-width: 400px;
  ${props =>
    props.sticky &&
    css`
      position: sticky;
      top: ${props.top || "1rem"};
    `}
  @media (max-width: 960px) {
    /* max-width: 100%; */
    width: 100%;
    min-width: auto;
    position: static;
  }
`;

export const Left = styled("main")`
  margin: 2.618rem auto;
  padding: 0 1rem;
  max-width: ${props => props.width || "720px"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};
  ${props =>
    props.sticky &&
    css`
      position: sticky;
      top: ${props.top || "1rem"};
    `}
  @media (max-width: 960px) {
    /* max-width: 100%; */
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

export const Section = styled("section")`
  padding: 1rem;
  max-width: 1440px;
  margin: 0 auto;
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
      font-size: 10vw;
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
    max-width: 75%;
    margin: 1rem auto 0.618rem;
    line-height: 1.5;
  }
  h2 {
    font-size: 3.2rem;
    line-height: 1.3;
    text-align: center;
    @media (max-width: 960px) {
      max-width: 100%;
      text-align: left;
      font-size: 3.2rem;
    }
  }
  h3 {
    margin-top: 7rem;
    font-size: 2.1rem;
    @media (max-width: 960px) {
      font-size: 1.8rem;
      max-width: 100%;
    }
  }
  h5 {
    margin-bottom: -3.618rem;
    margin-top: 3rem;
    font-size: 1.4rem;
    strong {
      color: red;
      font-weight: normal;
    }
    @media (max-width: 960px) {
      max-width: 100%;
      font-size: 0.918rem;
      margin-bottom: -6rem;
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
`;

const QuoteContainer = styled("div")`
  margin: 0.618rem 1.618rem;
  flex: 1 1 45%;
  max-width: 100%;
  position: relative;
  &:nth-of-type(1) {
    .image {
      order: 0;
    }
  }
  blockquote {
    box-shadow: 0.392rem 0.618rem 1rem rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: row;
    margin-top: 0;
    max-width: 760px;
    background: white;
    padding: 0;
    margin: 4rem auto 1rem;
    position: relative;
    border: 0.618rem solid red;
    p {
      flex: 1 1 auto;
      font-size: 1rem;
      line-height: 1.618;
      margin: 3rem 1rem 1rem;
    }
    .image {
      order: 2;
      display: block;
      width: 100%;
      min-width: 200px;
      max-width: 530px;
      background: url(${props => props.background}) no-repeat center center;
      background-size: cover;
      img {
        display: none;
      }
      @media (max-width: 960px) {
        background: none;
        max-width: 100%;
        order: 1 !important;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    h6 {
      max-width: 100%;
      margin: 0 1rem 3rem;
      font-variation-settings: "LXND" 20;
      letter-spacing: 1px;
      text-transform: uppercase;
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
    @media (max-width: 1220px) {
      max-width: 100%;
      left: 0;
      left: 0;
    }
    @media (max-width: 640px) {
      display: block;
      background: none !important;
      padding: 0 !important;
      .image {
        max-width: 100%;
      }
    }
  }
`;

export const Intro = styled("section")`
  background: red;
  padding: 20vh 10vw;
  h1 {
    animation: ${fadeIn} 900ms ease-in-out;
    font-size: 3.2vw;
    line-height: 1.392;
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    span {
      display: inline-block;
    }
    strong {
      color: white;
    }
    @media (max-width: 960px) {
      font-size: 2.1rem;
    }
  }
  @media (max-width: 960px) {
    padding: 8vh 6vw;
  }
`;

export const Quote = ({ source, children, background, ...props }) => (
  <QuoteContainer background={background} {...props}>
    <blockquote>
      <div className="image">
        <img src={background} />
      </div>
      <div>
        {children}
        <h6>— {source}</h6>
      </div>
    </blockquote>
  </QuoteContainer>
);
