import Highlighter from './Highlighter'
import Timer from './Timer'
import useInterval from '../lib/useInterval'
import { useState, useEffect } from 'react'
import ms from 'ms'
import prettyMs from 'pretty-ms'

function sample(array,size) {
  const results = [],
    sampled = {};
  while(results.length<size && results.length<array.length) {
    const index = Math.trunc(Math.random() * array.length);
    if(!sampled[index]) {
      results.push(index);
      sampled[index] = true;
    }
  }
  return results;
}

const CorrectWordsPerMinute = (correctWords = 12, timeItTook = '12s') => {
  const timeInMS = ms(timeItTook)
  const overTime = (correctWords / timeInMS) || 0
  // 60000 ms in a minute
  return Math.ceil(overTime * 60000)
}

const useWPMSimulator = (words) => {
  const toggle = () => {
    setStarted(!started)
    setIndex(0)
    setTimer(0)
  }

  const [started, setStarted] = useState(false)
  const [errors, setErrors] = useState(sample(words, Math.floor(Math.random() * words.length/2)))

  const [wpm, setWPM] = useState(250)
  const [index, setIndex] = useState(0)
  const [timer, setTimer] = useState(0)

  const [stats, setStats] = useState({
    minutes: 0,
    milliseconds: 0
  })


  useEffect(() => {
    const wpms = ms(`${1/wpm}m`)
    if (!started) {
      setIndex(0)
      setTimer(0)
    }
    if (index <= words.length - 2) {
      const wordCounter = setInterval(() => {
        setIndex(index + 1)
        setTimer(index*wpms)
      }, wpms)
      return () => clearInterval(wordCounter)
    }
  }, [index])

  useEffect(() => {
    const minutes = (words.length / wpm).toFixed(2)
    const milliseconds = ms(`${minutes} min`)
    setStats({ minutes, milliseconds })
    setIndex(0)
    setTimer(0)
    return () => {}
  }, [wpm])

  return {
    wpm,
    setWPM,
    stats,
    setStats,
    started,
    setStarted,
    toggle,
    errors,
    index,
    setIndex,
    timer,
    setTimer
  }
}

const Text = ({ content }) => {
  const words = content.match(/\b(\w+\W+)/g)

  const {
    wpm,
    setWPM,
    stats,
    setStats,
    started,
    setStarted,
    toggle,
    errors,
    index,
    setIndex,
    timer,
    setTimer
  } = useWPMSimulator(words)

  const currentErrors = errors.filter(e => e <= index).length || 0
  return (
    <>
    <div>
      <label>Words per minute ({wpm})</label><br/>
      <input
        type="range" min="50" max="400" step="50" value={wpm}
        onChange={({ target }) => setWPM(target.value)}
        onMouseDown={() => setStarted(false)}
        onMouseUp={() => setStarted(true)}
        />
      <button onClick={toggle}>{ started ? 'Stop' : 'Start'}</button>
    </div>

    <Highlighter errors={errors} index={index} setIndex={setIndex} wpm={wpm} text={content} words={words} {...stats}/>

    <h3>Ideal</h3>
    <p>
      <strong>Time to read:</strong> {prettyMs(stats.milliseconds)}
    </p>
    <p>
      {index} <strong>words read </strong>
       - 0 <strong>errors </strong>
       = {CorrectWordsPerMinute(index, prettyMs(timer))} <strong>Words correct per minute</strong>
    </p>

    <h3>Actual</h3>
    <p>
      <strong>Time to read:</strong> {prettyMs(timer)}
    </p>
    <p>
      {index} <strong>words read </strong>
       - {currentErrors} <strong>errors </strong>
       = {CorrectWordsPerMinute(index - currentErrors, prettyMs(timer))} <strong>Words correct per minute</strong>
    </p>
    </>
  )
}

export default Text
