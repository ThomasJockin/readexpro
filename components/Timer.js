import { useState, useEffect } from 'react'
import prettyMs from 'pretty-ms'

const Timer = ({ timer }) => {
  return (
    <p><strong>Time to read:</strong> {prettyMs(timer)}</p>
  )
}

export default Timer
