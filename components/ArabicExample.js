import styled from "@emotion/styled"
import { useSpring, useTransition, useChain, animated, config } from 'react-spring'
import useOnScreen from '../lib/useOnScreen'
import { useRef, useState } from 'react'

const Container = styled('div')`
  margin: 3rem auto;
  pre {
    width: 100%;
    display: block;
    margin: 5rem auto 1rem;
    max-width: 740px
  }
`
const Kashida = styled(animated.h1)`
  text-align: center;
  font-feature-settings: "salt";
  line-height: 1.6;
`

export default () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, '0px')
  const [reversed, setReversed] = useState(false)

  const animation = useSpring({
    lxnd: 0,
    from: {
      lxnd: 100
    },
    reset: onScreen,
    reverse: onScreen && reversed,
    onRest: () => onScreen && setReversed(!reversed)
  })

  return (
    <Container>
      <Kashida ref={ref} style={{
        fontVariationSettings: animation.lxnd.interpolate(x => `'LXND' ${x.toFixed()}`)
      }}>
        a
      </Kashida>
      <pre>
        <animated.code>{animation.lxnd.interpolate(x => `h1, p { font-variation-settings: 'LXND' ${x.toFixed()}; }`)}</animated.code>
      </pre>
      <h6>An illustration of potential for using this concept for Arabic typography</h6>
    </Container>
  )
}
