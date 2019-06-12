import { css, Global } from '@emotion/core'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import Logo from './Logo'

const global = css`
  @font-face {
      font-family: 'Lexend';
      src: url('static/fonts/lexendgx.woff2') format('woff2'),
           url('static/fonts/lexendgx.ttf') format('truetype');
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

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    padding: 0 1rem;
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
    color: #A9A9A9;
    font-variation-settings: 'LXND' 20;
    line-height: 1.4;
  }
  a {
    color: red;
    font-variation-settings: 'LXND' 80;
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
    color: rgba(0,0,0,0.76);
    line-height: 1.6;
    padding: 0 1rem;
  }
  ul, ol {
    color: rgba(0,0,0,0.76);
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
  pre {
    display: block;
    width: 100%;
    background: rgba(0,0,0,0.06);
    border-radius: 0.292rem;
    padding: 0.618rem;
    border: 1px solid rgba(0,0,0,0.08);
  }
  code {
    display: block;
    width: 100%;
    font-size: 0.8rem;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 0.192rem;
    padding: 0.392rem 0.618rem;
    background: white;
    overflow-x: auto;
  }
`

export default ({ children }) => {
  return (
    <>
      <Global
        styles={global}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://micahbrich.github.io/lexend/static/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://micahbrich.github.io/lexend/static/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://micahbrich.github.io/lexend/static/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="https://micahbrich.github.io/lexend/static/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="https://micahbrich.github.io/lexend/static/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="https://micahbrich.github.io/lexend/static/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#b91d47"/>
        <meta name="msapplication-config" content="https://micahbrich.github.io/lexend/static/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>


      <title>Lexend — A Variable Font Designed for Reading</title>
      <meta name="title" content="Lexend — A Variable Font Designed for Reading"/>
      <meta name="description" content="Lexend is a variable font empirically shown to significantly improve reading-proficiency."/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://micahbrich.github.io/lexend/"/>
      <meta property="og:title" content="Lexend — A Variable Font Designed for Reading"/>
      <meta property="og:description" content="Lexend is a variable font empirically shown to significantly improve reading-proficiency."/>
      <meta property="og:image" content="https://micahbrich.github.io/lexend/static/social/lexend.jpg"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://micahbrich.github.io/lexend/"/>
      <meta property="twitter:title" content="Lexend — A Variable Font Designed for Reading"/>
      <meta property="twitter:description" content="Lexend is a variable font empirically shown to significantly improve reading-proficiency."/>
      <meta property="twitter:image" content="https://micahbrich.github.io/lexend/static/social/lexend.jpg"/>

      </Head>
      <Nav>
        <Logo/>
      </Nav>
      { children }
      <Footer/>
    </>
  )
}
