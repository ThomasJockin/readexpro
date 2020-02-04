import data from '../data/TNRvsLXND'
import styled from "@emotion/styled"
import AnimatedNumber from '../components/AnimatedNumber'
const avg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
const max = arr => Math.max(...arr);


const Stats = ({ children = [] }) => {
  return (
    <StatsContainer>
      { children.map( (stat, i) => <AnimatedStat key={`stat-${i}`} index={i}>{stat}</AnimatedStat> )}
    </StatsContainer>
  )
}

const AnimatedStat = ({ index, children }) => {
  // const regex = /([+|-])?(\d+)(?:\.\d+)?([\/|%])?/gm
  const regex = /([+|-])?((\d+[\/\d.]*|\d))([\/|%])?\s(.+)/gm
  let [matched, plusminus, number, _, percent, label ] = children.props.children.split(regex)
  return (
    <Stat key={`stat-${index}-${number}`}>
      <h5>
        <span className='extra'>{plusminus}</span>
          <AnimatedNumber delay={index}>{number}</AnimatedNumber>
        <span className='extra'>{percent}</span>
      </h5>

      <p>
      {label}
      </p>
    </Stat>
  )
}


const StatsContainer = styled('section')`
  width: 98%;
  margin: 1rem auto;
  border: 1px solid red;
  padding: 0.192rem;
  display: flex;
  flex-wrap: wrap;
  /* display: grid;
  grid-gap: 0.192rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
`
const Stat = styled('div')`
  position: relative;
  border: 1px solid red;
  padding: 3rem 0.618rem;
  text-align: center;
  flex: 1 1 20%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0.192rem;
  p {
    margin: 0 auto;
    text-align: center;
    color: rgba(0,0,0,0.7);
    font-size: 0.618rem;
    font-variation-settings: 'LXND' 80;
    text-transform: uppercase;
    line-height: 1.6;
  }
  h5, strong {
    font-variation-settings: 'LXND' 0;
    display: block;
    font-size: 4.8vw;
    font-weight: normal;
    margin: 0.392rem 0;
    line-height: 1.2;
    em {
      font-size: 30%;
      vertical-align: super;
      position: relative;
      top: 10%;
      margin: 0 0.618rem;
      font-style: normal;
    }
    .extra {
      font-size: 40%;
      vertical-align: middle;
    }
  }
  &:nth-of-type(1) {
    grid-column: span 2;
    min-width: 50%;
    h5 {
      font-size: 10vw;
      @media (max-width: 960px) {
        font-size: 12vw;
      }
    }
  }
  &:nth-of-type(10) {
    grid-column: span 2;
    min-width: 50%;
    h5 {
      font-size: 10vw;
      @media (max-width: 960px) {
        font-size: 12vw;
      }
    }
  }
`

export default Stats
