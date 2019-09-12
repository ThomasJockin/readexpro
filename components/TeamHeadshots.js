import styled from "@emotion/styled";
import { motion } from "framer-motion";

const List = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 1rem auto;
  div:nth-child(1) {
    order: 1;
  }
  div:nth-child(2) {
    order: 3;
  }
  div:nth-child(3) {
    order: 2;
  }
  p {
    font-size: 0.918rem;
    max-width: 600px;
  }
  @media (max-width: 1600px) {
    max-width: 1440px;
    div:nth-child(1) {
      order: 1;
      z-index: 11;
    }
    div:nth-child(2) {
      order: 2;
    }
    div:nth-child(3) {
      order: 3;
    }
  }
`;

const Headshot = styled(motion.div)`
  padding: 0;
  margin: 2rem;
  flex: 1 1 10%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  border: 0.192rem solid white;
  min-height: 70vh;
  min-width: 300px;
  max-width: 400px;
  overflow: hidden;
  border-radius: 0.618rem;
  /* position: sticky; */
  top: 3rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 180ms ease-in-out;
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),
      0 28px 50px -12px rgba(0, 0, 0, 0.25);
  }
  &:before, &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5rem 1rem 1rem;
    background: rgba(0, 0, 0, 0.24);
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    text-shadow: 0px 1px 0px rgba(0,0,0,0.7);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-variation-settings: 'LXND' 64;
    display: block;
    z-index: 10;
    line-height: 1.7;
    content: "${props => props.name}";
    text-align: center;
  }
  &:before {
    font-size: 0.718rem;
    font-variation-settings: 'LXND' 100;
    padding: 3rem 1rem 2.292rem;
    z-index: 11;
    background: transparent;
  }
  &:after {
    z-index: 10;
    font-size: 0.618rem;
    color: rgba(255,255,255,0.7);
    letter-spacing: 3px;
    font-variation-settings: 'LXND' 50;
    content: "${props => props.title}";
  }
  @media (max-width: 1140px) {
    position: relative;
    min-height: 40vh;
    position: relative;
    margin: 1rem auto 4rem;
  }
`;

const spring = {
  type: "spring",
  damping: 5,
  stiffness: 80,
  mass: 2
};

const TeamHeadshots = ({ children }) => {
  return (
    <List>
      <Headshot
        name="Dr. Bonnie Shaver-Troup"
        title="Educational Therapist"
        src="/static/images/bonnie.jpeg"
        transition={spring}
        initial={{ y: 0, rotate: -2, scale: 0.99 }}
        whileHover={{ y: -10, rotate: -4, scale: 1 }}
      />
      <Headshot
        name="Thomas Jockin"
        title="Type Designer & Educator"
        src="/static/images/thomas-jockin.jpg"
        transition={spring}
        initial={{ y: 0, rotate: 1, scale: 0.99 }}
        whileHover={{ y: -10, rotate: 3, scale: 1 }}
      />
      {children}
    </List>
  );
};
export default TeamHeadshots;
