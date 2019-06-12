import { useSpring, animated } from 'react-spring'
import styled from "@emotion/styled"
import { Button } from '../components'
import useHover from '../lib/useHover'

const Box = styled('div')`
  border: 1px solid rgba(0,0,0,0.24);
  background: red;
  padding: 3px;
  margin: 5rem 0 6rem;
`

const FormContainer = styled(animated.form)`
  box-shadow: 0px 0.392rem 0.618rem 0 rgba(0,0,0,0.12), 0px 0.618rem 1rem 0 rgba(0,0,0,0.07);
  border: 0.392rem solid red;
  padding: 1rem 3rem;
  max-width: 700px;
  width: 90%;
  margin: -3rem auto;
  background: white;
  div {
    display: block;
    margin: 2.618rem auto;
  }
  label {
    font-size: 0.718rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    font-variation-settings: 'LXND' 40;
    margin: 0 0.392rem;
    cursor: pointer;
  }
  input[type=text], input[type=email] {
    margin: 0.618rem 0 0.618rem;
    font-family: "Lexend", Helvetica, Arial, sans-serif;
    line-height: 1.4;
    display: block;
    width: 100%;
    font-size: 1.8rem;
    -webkit-appearance: none;
    border: 0px;
    border-bottom: 1px dashed rgba(0,0,0,0.24);
    &:focus {
      outline: none;
      border-bottom: 1px dashed rgba(0,0,0,1);
    }
  }
  input[type=checkbox] {
    margin-right: 0.618rem;
    position: relative;
    top: -1px;
  }
  button {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 0.618rem;
    width: 100%;
  }
`


const Form = ({ children, ...props }) => {
  const [hoverRef, hovering] = useHover()

  const animation = useSpring({
    transform:  hovering ? 'translate3d(0,0,0) scale(1.024) rotate(0deg)' : 'translate3d(0,0,0) scale(1) rotate(0deg)',
    config: {
      mass: 0.24,
      tension: 200,
      friction: 5
    }
  })

  return (
    <FormContainer
      ref={hoverRef}
      style={animation}
      {...props}>
      {children}
    </FormContainer>
  )
}

const EmailForm = props => {
  return (
    <Box>
    <Form action="https://mailthis.to/info@lexend.com" method="POST">
      <input type="hidden" name="_subject" value="Lexend form submission"/>
      <input type="hidden" name="_after" value="http://www.lexend.com/"/>
      <input type="hidden" name="_honeypot" value=""/>
      <input type="hidden" name="_confirmation" value="Excellent! We'll be in touch once there are updates."/>

      <div>
        <label htmlFor="name">Your Name:</label>
        <input type="text" name="name" id="name" placeholder="Sherlock"/>
      </div>
      <div>
        <label htmlFor="email">Your Email:</label>
        <input type="email" name="email" id="email" placeholder="sh.holmes@science.net"/>
      </div>
      <div>
        <label>
          <input type="checkbox" name="contribute"/>
          I'd love to help contribute
        </label>
      </div>
      <div>
        <Button value="submit">Keep me updated, send me details</Button>
      </div>
    </Form>
    </Box>
  )
}

export default EmailForm
