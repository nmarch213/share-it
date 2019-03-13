import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);

  body {
    font-size: 10px;
    padding: 0;
    margin: 0;
    font-family: "Open Sans";
    font-weight: 400;
    background: ${(props) => props.theme.background};
  }
`;
