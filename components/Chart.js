import { useContext } from 'react'
import TypeChoicesContext from '../lib/useTypeChoices'
import useMediaQuery from '../lib/useMediaQuery'
import styled from "@emotion/styled";
import { ResponsiveBar } from "@nivo/bar";

import data from "../data/TNRvsLXND";

const Charts = () => (
  <Container>
    <BarChart />
    <h6>The p value in this experiment (0.014) says the chance of the results presented happening by random was 1.4%. In statistics, a result is considered significant if it’s below 5%.</h6>
  </Container>
);

const StudentNumber = styled('h6')`
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 2px 1px 3px;
  color: ${props => props.color};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`

const Tooltip = ({ id, value, color, indexValue: student, ...rest }) => (
  <>
  <StudentNumber color={color}>Student {student}</StudentNumber>
  <strong style={{ color }}>
    {id} @ {value} wpm
  </strong>
  </>
);

const BarChart = () => {
  const { family, setTypeFamily } = useContext(TypeChoicesContext)
  const orientation = useMediaQuery(
    // Media queries
    ['(max-width: 960px)'],
    ['horizontal'],
    'vertical'
  );
  const orientationLabels = useMediaQuery(
    // Media queries
    ['(max-width: 960px)'],
    [{
      left: "Anonymous Student #",
      bottom: 'Correct Words per Minute'
    }],
    {
      bottom: "Anonymous Student #",
      left: 'Correct Words per Minute'
    }
  );

  return (
    <>
  <ResponsiveBar
    onMouseEnter={({ id }) => setTypeFamily(id)}
    data={data}
    keys={["Times New Roman", "Lexend"]}
    indexBy="Student"
    margin={{ top: 80, right: 20, bottom: 50, left: 47 }}
    padding={0.24}
    groupMode="grouped"
    layout={ orientation }
    enableGridX
    tooltip={Tooltip}
    colors={
      [
        'hsla(0, 0%, 85%, 1)',
        'rgba(250, 76, 76, 1)'
      ]
    }
    legends={[
      {
        dataFrom: "keys",
        anchor: "top-right",
        direction: "column",
        justify: false,
        translateX: -40,
        translateY: 10,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.65,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    fontFamily="Lexend"
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisLeft={{
      legend: orientationLabels.left,
      legendPosition: 'middle',
      legendOffset: -40
    }}
    axisBottom={{
      legend: orientationLabels.bottom,
      legendPosition: 'middle',
      legendOffset: 40
    }}
    axisTop={null}
    axisRight={null}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 0]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
  </>
)
}

const Container = styled("section")`
  width: 100%;
  height: 90vh;
  padding-bottom: 2rem;
  h6 {
    font-size: 70%;
    line-height: 1.6;
    max-width: 88%;
    margin: 1.392rem auto 2rem;
    text-align: center;
  }
  g {
    cursor: pointer;
  }
`;

export default Charts;
