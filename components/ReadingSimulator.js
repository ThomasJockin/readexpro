import { useContext } from 'react'
import TypeChoicesContext from '../lib/useTypeChoices'
import ReadingSimulatorContext from '../lib/useReadingSimulator'
import styled from '@emotion/styled'
import Markdown from 'markdown-to-jsx'
import Highlighter from './Highlighter'
import ReadingStatistics from './ReadingStatistics'
import ReadingSimulatorControls from './ReadingSimulatorControls'
import { useState, useEffect } from 'react'



const Simulator = ({ disabled = [], ...props }) => {
  const { family, text, setText, setTypeFamily, axis, customStyles } = useContext(TypeChoicesContext)
  const { words, wpm, setWPM, started, setStarted, index, errors, timer } = useContext(ReadingSimulatorContext)
  const changeFamily = ({ target }) => setTypeFamily(target.value)

  return (
    <Container>
    <ReadingSimulatorControls
      disabled={disabled}
      wpm={wpm}
      setWPM={setWPM}
      started={started}
      text={text}
      setText={setText}
      on={() => setStarted(true)}
      off={() => setStarted(false)}
      family={props.family || family}
      changeFamily={changeFamily}
      />
    <Highlighter family={props.family || family} words={words} index={index}
      errors={errors}
      customStyles={customStyles}/>
    <ReadingStatistics words={words} wpm={wpm} timer={timer} errors={errors} index={index}/>
    </Container>
  )
}



const Container = styled('section')`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default Simulator
