import { useState, useEffect, createContext, useContext } from 'react'
import useVariableFont from "react-variable-fonts"
import texts from '../data/texts'
const TypeChoicesContext = createContext()

export const TypeChoicesProvider = ({ children }) => {

  let content

  const [text, setText] = useState(0)
  const [family, setTypeFamily] = useState('Lexend')
  const [axis, setAxis] = useState({ LXND: 0 })
  const [customStyles, updateStyles] = useVariableFont("Lexend", {})

  useEffect(() => {
    updateStyles(axis)
    return () => {}
  }, [axis])


  return <TypeChoicesContext.Provider value={{
      content: texts[text],
      text,
      setText,
      axis,
      setAxis,
      customStyles,
      updateStyles,
      family,
      setTypeFamily
    }}>{children}</TypeChoicesContext.Provider>
}

export const TypeChoices = TypeChoicesContext.Consumer


export default TypeChoicesContext
