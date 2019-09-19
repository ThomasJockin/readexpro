import { css, Global } from "@emotion/core";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import Logo from "./Logo";

const global = css`
  @font-face {
    font-family: "Lexend";
    src: url("static/fonts/lexendgx.woff2") format("woff2"),
      url("static/fonts/lexendgx.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-optical-sizing: auto;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: "Lexend", Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.4;
    @media (max-width: 640px) {
      font-size: 14px;
    }
  }
  body {
    padding: 0 0;
  }
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    padding: 0 1rem;
  }
  strong {
    font-weight: normal;
    color: red;
  }
  hr {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin: 4rem auto -2rem;
    max-width: 960px;
    position: relative;
    &:before {
      display: block;
      content: " ";
      border-bottom: 1px dashed red;
      font-variation-settings: "LXND" 0;
      width: 100%;
      height: 1rem;
      z-index: 10;
      color: red;
      text-align: center;
      position: relative;
      top: 0;
    }
  }
  h2 {
    font-size: 2.7rem;
    line-height: 1.2;
    margin-top: 10vh;
    span {
      font-size: 30%;
    }
  }
  h3 {
    font-size: 1.4rem;
    margin: 3rem 0 0.618rem;
  }
  h6 {
    color: #a9a9a9;
    font-variation-settings: "LXND" 20;
    line-height: 1.4;
  }
  p > a,
  h6 > a {
    color: red;
    font-variation-settings: "LXND" 80;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 0.618rem !important;
    &:before {
      content: "⌁";
      margin: 0 0.192rem;
      font-size: 140%;
    }
  }
  p {
    max-width: 700px;
    color: rgba(0, 0, 0, 0.76);
    line-height: 1.6;
    padding: 0 1rem;
  }
  ul,
  ol {
    color: rgba(0, 0, 0, 0.76);
    max-width: 960px;
    width: 100%;
    line-height: 1.6;
    padding: 0 1rem 0;
    @media (max-width: 960px) {
      padding-left: 1rem;
    }
    li {
      max-width: 100%;
      margin: 0.618rem 0 0.392rem;
    }
  }
  ol,
  ul {
    list-style: none;
    counter-reset: list-counter;
    li {
      counter-increment: list-counter;
      &:before {
        content: " • ";
        border: 2px solid red;
        color: red;
        border-radius: 100px;
        display: inline-block;
        text-align: center;
        font-size: 0.8rem;
        line-height: 1rem;
        margin-left: -0.618rem;
        margin-right: 0.618rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }
  ol li:before {
    content: counter(list-counter) " ";
  }
  pre {
    display: block;
    width: 100%;
    background: rgba(0, 0, 0, 0.06);
    border-radius: 0.292rem;
    padding: 0.618rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  code {
    display: block;
    width: 100%;
    font-size: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0.192rem;
    padding: 0.392rem 0.618rem;
    background: white;
    overflow-x: auto;
  }
`;

export default ({ children }) => {
  return (
    <>
      <Global styles={global} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.lexend.com/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.lexend.com/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.lexend.com/static/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://www.lexend.com/static/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://www.lexend.com/static/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href="https://www.lexend.com/static/favicon/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta
          name="msapplication-config"
          content="https://www.lexend.com/static/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        <title>Lexend — Change the way the world reads.</title>
        <meta name="title" content="Lexend — Change the way the world reads." />
        <meta
          name="description"
          content="Lexend — Change the way the world reads."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lexend.com/" />
        <meta
          property="og:title"
          content="Lexend — Change the way the world reads."
        />
        <meta
          property="og:description"
          content="Lexend — Change the way the world reads."
        />
        <meta
          property="og:image"
          content="https://www.lexend.com/static/social/lexend-v2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.lexend.com/" />
        <meta
          property="twitter:title"
          content="Lexend — Change the way the world reads."
        />
        <meta
          property="twitter:description"
          content="Lexend — Change the way the world reads."
        />
        <meta
          property="twitter:image"
          content="https://www.lexend.com/static/social/lexend-v2.png"
        />
      </Head>
      <Nav>
        <Logo />
      </Nav>
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};
