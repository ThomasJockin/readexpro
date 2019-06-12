import { useContext } from 'react'
import TypeChoicesContext from '../lib/useTypeChoices'
import { useState, useEffect } from 'react'
import ms from 'ms'
import parseMs from 'parse-ms'
import prettyMs from 'pretty-ms'
import styled, { css } from '@emotion/styled'
import Markdown from 'markdown-to-jsx';

const Highlighted = styled('strong')`
  background: yellow;
  font-weight: normal;
  color: black;
`
const Striked = styled('del')`
  color: red;
  font-weight: normal;
`
const P = styled('p')`
  color: rgba(0,0,0,0.7);
`

const Highlighter = ({ family, errors, index = 0, words, milliseconds = 0, minutes = 0, wpm = 250, customStyles }) => {

  const options = {
    overrides: {
      del: Striked,
      strong: Highlighted,
      p: {
        component: P,
        props: {
          style: {
            ...customStyles,
            fontFamily: family

          }
        }
      }
    },
  }

  const renderedWords = words.map((word, wordIndex) => {
    word = word.replace(/^ +| +$/gm, "")
    const newLines = /(\\n\\n|\\n)/g
    if (wordIndex === index){
      if (word.includes("\n")) {
        word = word.replace(newLines, '')
        return `**${word}**\n\n`
      } else {
        return `**${word}**`
      }
    }
    if (errors.includes(wordIndex) && index > wordIndex) {
      return `~~${word}~~`
    }
    return word
  })

  return (
    <>
    <StyledMarkdown options={options} style={{ ...customStyles }}>{renderedWords.join(" ")}</StyledMarkdown>
    </>
  )
}


const StyledMarkdown = styled(Markdown)`
  max-height: 64vh;
  overflow-y: auto;
`

export default Highlighter
