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
  .dark main {
    background-color: #1f1f1f;
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
    /* grid-template-rows: 1fr min-content; */

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

  .rightGrid {
    grid-auto-flow: dense;
    grid-template-columns: 1fr 1fr 2fr;

    div:first-child {
      grid-area: 1 / 3 / 3 / 4;
    }
    @media (max-width: 1490px) {
      grid-template-columns: minmax(340px, 1fr) minmax(500px, 2fr);
      div:first-child {
        grid-area: 1 / 2 / 3 / 3;
      }
    }
    @media (max-width: 1080px) {
      grid-template-columns: 1fr 1fr;
      div:first-child {
        grid-area: auto;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .Grid5 {
    @media (min-width: 768px) and (max-width: 1080px) {
      div:last-child {
        grid-column: span 2;
      }
    }
  }
  .rightGrid.Grid5 {
    @media (min-width: 768px) and (max-width: 1080px) {
      div:last-child {
        grid-column: span 2;
      }
    }
  }

  .Grid4 {
    @media (min-width: 1080px) {
      div:last-child {
        grid-column: span 2;
      }
    }
  }
  .rightGrid.Grid3 {
    grid-template-rows: 1fr min-content;
    @media (min-width: 1490px) {
      div:first-child {
        grid-row-start: 1;
        grid-row-end: 2;
      }
    }
    @media (min-width: 768px) and (max-width: 1080px) {
      div:last-child {
        grid-column: span 2;
      }
    }
  }
  .Grid3 {
    grid-template-rows: 1fr min-content;
    @media (min-width: 1490px) {
      div:first-child {
        grid-row-start: 1;
        grid-row-end: 2;
      }
    }
    @media (min-width: 768px) and (max-width: 1080px) {
      div:last-child {
        grid-column: span 2;
      }
    }
  }
  .Grid2 {
    @media (min-width: 768px) {
      div:first-child {
        grid-area: auto;
      }
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }
  .Grid1 {
    @media (min-width: 768px) {
      div:first-child {
        grid-area: auto;
      }
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
    @media (max-width: 768px) {
      min-height: 226px;
    }
  }

  @media (max-width: 387px) {
    .titletext {
      font-size: 12vw;
    }
  }
`;
