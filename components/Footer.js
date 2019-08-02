import styled from "@emotion/styled";

const Footer = styled("footer")`
  padding: 1.618rem 5.618rem 1.618rem 1.618rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 100;
  p {
    font-size: 0.718rem;
    margin: 0 1rem 0;
    padding: 0;
    a {
      font-size: 0.8em;
    }
  }
  svg {
    position: relative;
    top: 0.392rem;
    opacity: 0.7;
    max-height: 2.392rem;
  }
`;

export default () => {
  return (
    <Footer>
      <p>
        Type design by the talented{" "}
        <a href="http://thomasjockin.com/" target="_blank">
          Thomas Jockin
        </a>
        , endebted by the fine research of{" "}
        <a href="http://www.lexend.com" target="_blank">
          Dr. Bonnie Shaver-Troup.
        </a>{" "}
        Site design & development by{" "}
        <a href="https://micahrich.com/" target="_blank">
          Micah Rich
        </a>
        .
      </p>
    </Footer>
  );
};
