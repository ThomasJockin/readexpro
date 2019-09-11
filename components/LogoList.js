import styled from "@emotion/styled";

const List = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
  padding: 0 1rem;
  margin: 1rem auto;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const Logo = styled("img")`
  padding: 0.392rem;
  margin: 2rem auto;
  flex: 1 1 auto;
  max-height: 3.618rem;
`;

const LogoList = () => (
  <List>
    <Logo src="/static/images/logos/adobe.svg" />
    <Logo src="/static/images/logos/stanford.svg" />
    <Logo src="/static/images/logos/google.svg" />
    <Logo src="/static/images/logos/apple.svg" />
    <Logo src="/static/images/logos/microsoft.svg" />
    <Logo src="/static/images/logos/hp.svg" />
  </List>
);
export default LogoList;
