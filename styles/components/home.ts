import styled from "styled-components";

export const HomeCointainer = styled.div`
  * {
    box-sizing: border-box;
  }
  main {
    width: 100vw;
    height: auto;
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

  .helpUsToImproveDescriptionAlt {
    text-align-last: right;
  }
  .mainOpportunities {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    @media (max-width: 1490px) {
      grid-template-columns: minmax(500px, 2fr) minmax(340px, 1fr);
    }
    @media (max-width: 1080px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    /* grid-template-columns: minmax(450px, 2fr) repeat(2, minmax(300px, 1fr)); */

    /* grid-template-rows: repeat(auto-fill, 1fr); */
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
  .mainOpportunities div:first-child {
    grid-area: 1 / 1 / 3 / 2;
    @media (max-width: 1080px) {
      grid-area: auto;
    }
  }
`;
