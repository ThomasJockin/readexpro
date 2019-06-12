import styled from '@emotion/styled'

const Page = styled('div')`
  border: 1px solid rgba(0,0,0,0.24);
  padding: 2rem;
  margin: 2rem auto;
  font-size: 0.618rem;
  width: 100%;
  max-width: 600px;
  background: rgba(255,255,255,0.8);
  height: 100%;
  overflow-y: auto;
  box-shadow: 0px 2px 0.392rem rgba(0,0,0,0.05);
  border-radius: 3px;
  p {
    line-height: 1.7;
  }
  @media (max-width: 1200px) {
    /* height: 50vh; */
  }
`
export default Page
