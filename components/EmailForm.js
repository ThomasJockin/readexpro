import { useSpring, animated } from "react-spring";
import styled from "@emotion/styled";
import { Button } from "../components";
import useHover from "../lib/useHover";

const Box = styled("div")`
  border: 1px solid rgba(0, 0, 0, 0.24);
  background: red;
  padding: 3px;
  margin: 5rem 0 6rem;
`;

const FormContainer = styled(animated.form)`
  box-shadow: 0px 0.392rem 0.618rem 0 rgba(0, 0, 0, 0.12),
    0px 0.618rem 1rem 0 rgba(0, 0, 0, 0.07);
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
    font-variation-settings: "LXND" 40;
    margin: 0.392rem;
    cursor: pointer;
  }
  input[type="text"],
  input[type="email"] {
    margin: 0.618rem 0 0.618rem;
    font-family: "Lexend", Helvetica, Arial, sans-serif;
    line-height: 1.4;
    display: block;
    width: 100%;
    font-size: 1.8rem;
    -webkit-appearance: none;
    border: 0px;
    border: 1px dashed rgba(0, 0, 0, 0.24);
    background: rgba(0, 0, 0, 0.01);
    border-radius: 0.192rem;
    padding: 0.192rem 0.618rem;
    &:focus {
      outline: none;
      border-bottom: 1px dashed rgba(0, 0, 0, 1);
    }
  }
  input[type="checkbox"] {
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
`;

const Form = ({ children, ...props }) => {
  const [hoverRef, hovering] = useHover();

  const animation = useSpring({
    transform: hovering
      ? "translate3d(0,0,0) scale(1.024) rotate(0deg)"
      : "translate3d(0,0,0) scale(1) rotate(0deg)",
    config: {
      mass: 0.24,
      tension: 200,
      friction: 5
    }
  });

  return (
    <FormContainer ref={hoverRef} style={animation} {...props}>
      {children}
    </FormContainer>
  );
};

const EmailForm = props => {
  return (
    <Box>
      <Form
        method="POST"
        action="https://gmail.us3.list-manage.com/subscribe/post?u=d209f7a4c880d02da0497bbec&amp;id=c894fd858d"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div>
          <label htmlFor="name">Your First Name:</label>
          <input type="text" name="FNAME" id="name" />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" name="EMAIL" id="email" />
        </div>

        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_d209f7a4c880d02da0497bbec_c894fd858d"
            tabIndex="-1"
            defaultValue=""
          />
        </div>

        <div>
          <Button value="submit">Subscribe & Send me these fonts</Button>
        </div>
      </Form>
    </Box>
  );
};

export default EmailForm;
