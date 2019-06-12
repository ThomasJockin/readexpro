import texts from '../data/texts'
import styled from '@emotion/styled'
import { useContext } from 'react'
import TypeChoicesContext from '../lib/useTypeChoices'
import { Button } from '../components'
import RangeSlider from './RangeSlider'

const ReadingSimulatorControls = ({ family, changeFamily, text, setText, disabled = [], wpm, setWPM, started, on, off }) => {
  const changeText = ({target}) => setText(target.value)
  return (
    <ControlBar>
      <WPMBar>
        <label>
          Avg WPM ({wpm})
        </label>
        <RangeSlider min="50" max="400" step="50" value={wpm}
          onChange={({ target }) => setWPM(target.value)}
          onMouseDown={off}
          onMouseUp={on}
          />
      </WPMBar>
      <Select key="texts" disabled={disabled.includes('texts')} onChange={changeText} value={text}>
        {
          texts.map((_, i) => <option key={`text-${i}`} value={i}>Text #{i}</option>)
        }
      </Select>
      <Select key="family" onChange={changeFamily} disabled={disabled.includes('family')}
      value={family}>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Lexend">Lexend</option>
      </Select>
      <Button
        onClick={() => started ? off() : on() }
        started={started}
      >
        { started ? 'Stop' : 'Start'}
      </Button>
    </ControlBar>
  )
}

const ControlBar = styled('nav')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  padding-bottom: 1em;
  margin-bottom: 3em;
  input {
    cursor: grab;
    width: 100%;
  }
  label {
    max-width: 20%;
    margin-left: 4px;
  }
`

const Select = styled('select')`
  -webkit-appearance:none;
  height: 35px;
  padding: 0 0.818rem;
  font-size: 1em;
  background: white;
  border: 1px solid rgba(0,0,0,0.04);
  &:not([disabled]) {
    cursor: pointer;
    background: rgba(0,0,0,0.04);
    border-color: white;
  }
  margin-left: 10px;
  outline: none;
`
const WPMBar = styled('div')`
max-width: 30%;
`


export default ReadingSimulatorControls
