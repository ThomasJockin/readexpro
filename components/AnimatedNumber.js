import { useSpring, animated, config } from 'react-spring'
import useOnScreen from '../lib/useOnScreen'
import { useRef } from 'react'

const AnimatedNumber = ({ delay = 0, children }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, '0px')
  const numbers = children.split("")
  const results = numbers.map((item, i) => {
    if (!parseInt(item)) {
      return item
    }
    const animation = useSpring({
      number: parseInt(item),
      from: {
          number: 0
        },
      config: { tension: 40, friction: 20, precision: 0.1 },
      delay,
      reset: onScreen,
      reverse: !onScreen
      })
    return (
        <animated.span key={`animated-number-${i}`} ref={ref} style={animation}>
          { animation.number.interpolate(x => x.toFixed()) }
        </animated.span>
      )
  })
  return results
}

export default AnimatedNumber
