import ReadingSimulatorContext from '../lib/useReadingSimulator'
import { useContext } from 'react'
import styled from '@emotion/styled'
import ms from 'ms'
import prettyMs from 'pretty-ms'



export const TotalNumberOfWords = () => {
  const { words } = useContext(ReadingSimulatorContext)
  return words.length
}

export const TotalAmountOfTime = ({ as }) => {
  const { words, wpm } = useContext(ReadingSimulatorContext)
  if (as === "seconds") {
    return (words.length / wpm).toFixed(1) * 60
  }
  if (as === "decimal") {
    return (words.length / wpm).toFixed(1)
  }
  return prettyMs((words.length / wpm).toFixed(1) * 60000)
}

export const TotalNumberOfErrors = () => {
  const { errors } = useContext(ReadingSimulatorContext)
  return errors.length
}

export const TotalNumberOfCorrectWords = () => {
  const { words, errors } = useContext(ReadingSimulatorContext)
  return words.length - errors.length
}

export const TotalWordsCorrectPerMinute = () => {
  return (TotalNumberOfCorrectWords() / TotalAmountOfTime({ as: "decimal" })).toFixed()
}



export const CorrectWordsPerMinute = (correctWords, time) => {
  const overTime = (correctWords / time) || 0
  // 60000 ms in a minute
  return Math.ceil(overTime * 60000)
}

const ReadingStatistics = ({ words, wpm, timer, errors, index }) => {
  const minutes = (words.length / wpm).toFixed(2)
  const milliseconds = ms(`${minutes} min`)
  const currentErrors = errors.filter(e => e <= index).length || 0
  const cwpm = CorrectWordsPerMinute(index - currentErrors, timer)
  return (
    <Bar>
        <Stats>
          <strong>Time to read</strong>
          {prettyMs(timer)}
        </Stats>
        <Stats>
          <strong>Words read</strong>
          {index}
        </Stats>
        <Stats>
          <strong>Errors</strong>
          {currentErrors}
        </Stats>
        <Stats>
          <strong>Words Correct per Minute</strong>
           {cwpm} WCPM
        </Stats>
    </Bar>
  )
}

const Bar = styled('div')`
display: flex;
width: 105%;
align-items: flex-end;
justify-content: space-between;
border-top: 1px solid rgba(0,0,0,0.48);
margin-top: auto;
position: relative;
left: -2.5%;
`

const Stats = styled('div')`
  margin: 0 0 0;
  text-align: right;
  padding: 1rem 1rem 0;
  &:last-child {
    border-right: none;
  }
  h5 {
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  }
  font-size: 1.2rem;
  color: rgba(0,0,0,1);
  strong {
    font-size: 40%;
    display: block;
    margin-bottom: 0.192rem;
    font-variation-settings: 'LXND' 30;
    font-weight: normal;
    text-transform: uppercase;
    margin-right: -0.392rem;
  }
`

export default ReadingStatistics
