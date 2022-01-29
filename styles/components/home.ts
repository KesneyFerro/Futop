import styled from "styled-components";

export const HomeCointainer = styled.div`
  * {
    box-sizing: border-box;
  }
  main {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background-color: #fdfcfb;
  }

  .underline-rounded::after {
    content: "";
    height: 7px;
    background: red;
    border-radius: 9px;
    display: block;
    background-color: #ffc700;
  }
`;
