import { useState, useEffect, createContext, useContext } from "react";
import { sample, randomNumber } from "../lib/array.js";
import useVariableFont from "react-variable-fonts";
import texts from "../data/texts";
import ms from "ms";
import TypeChoices from "./useTypeChoices";

const ReadingSimulatorContext = createContext();

export const ReadingSimulatorProvider = ({ children }) => {
  const { content } = useContext(TypeChoices);
  const words = content.match(/\b(\w+\W+)/g);

  const [wpm, setWPM] = useState(100);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [errors, setErrors] = useState([]);

  useEffect(
    () => {
      const numberOfErrors = randomNumber(words) + 7;
      let randomArrayOfIndexes = sample(words, numberOfErrors);
      randomArrayOfIndexes = randomArrayOfIndexes.filter(i => i !== 0);
      setErrors(randomArrayOfIndexes);
    },
    [content]
  );

  useEffect(
    () => {
      const wpms = ms(`${1 / wpm}m`);
      if (started) {
        if (index >= words.length - 1) {
          setStarted(false);
        }
        if (index <= words.length - 1) {
          const wordCounter = setInterval(() => {
            setIndex(index + 1);
            setTimer(index * wpms);
          }, wpms);
          return () => clearInterval(wordCounter);
        }
      }
    },
    [started, index]
  );

  useEffect(
    () => {
      setIndex(0);
      setTimer(0);
      return () => {};
    },
    [wpm]
  );

  return (
    <ReadingSimulatorContext.Provider
      value={{
        words,
        wpm,
        setWPM,
        index,
        setIndex,
        errors,
        timer,
        started,
        setStarted
      }}
    >
      {children}
    </ReadingSimulatorContext.Provider>
  );
};

export default ReadingSimulatorContext;
