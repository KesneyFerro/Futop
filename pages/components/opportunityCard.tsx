/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { prominent } from "color.js";

const OpportunityCard = (props: any) => {
  const [colorr, setColor] = useState("");

  if (typeof window === "object") {
    prominent(`https://cors.jg-limamarinho202.workers.dev/?${props.image}`, {
      amount: 7,
    }).then((color: any) => {
      setColor(color[3].toString());
      // console.log(color[3].toString());
    });
  }

  const theme = {
    main: colorr,
    image: props.image,
  };
  // props.finalcolor = colorr;
  return (
    <motion.div
      // style={{ originY: 0, originX: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.25 }}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      className="w-auto h-auto cursor-pointer"
    >
      <ThemeProvider theme={theme}>
        <OpportunityCardStyle
          first={props.first}
          className={`${
            props.main ? "mainGrid" : ""
          } rounded-[15px] flex w-full h-full flex-col justify-between items-start px-[16px] py-[12px] relative`}
        >
          <div
            id="CardButtons"
            className="w-full h-auto flex flex-col items-end mb-12"
          >
            <div className="w-8 h-8 bg-[#F5F5F5] rounded-full mb-2"></div>
            <div className="w-8 h-8 bg-[#F5F5F5] rounded-full"></div>
          </div>
          <div className="flex justify-between items-center mb-[10px]">
            <div>
              <h3
                id="CardTitle"
                className="cardTitle text-xl font-bold text-white "
              >
                {props.title}
              </h3>
              <div id="CardTags" className="flex items-center mt-2 font-medium">
                {props.tags
                  ? props.tags.map((tag: any) => (
                      <div
                        key={tag}
                        className="bg-[#F5F5F5] px-3 py-2 rounded-full text-center mr-2 text-sm"
                      >
                        {tag}
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </OpportunityCardStyle>
      </ThemeProvider>
    </motion.div>
  );
};

interface CardInterface {
  first: boolean;
  // finalcolor: string;
}

const OpportunityCardStyle = styled.div<CardInterface>`
  /* width: 450px;
  height: 300px; */
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    linear-gradient(
      rgba(${(props) => props.theme.main}, 0.5),
      rgba(${(props) => props.theme.main}, 0.5)
    ),
    url(${(props) => props.theme.image});
  background-size: cover;

  #CardButtons {
    opacity: 0;
    transition: all 0.25s;
  }
  @media (min-width: 1079px) {
    #CardTitle {
      font-size: ${(props) => (props.first ? "1.875rem" : "")};
      line-height: ${(props) => (props.first ? "2.25rem" : "")};
    }
    #CardTags {
      margin-top: ${(props) => (props.first ? "20px" : "")};
      margin-bottom: ${(props) => (props.first ? "20px" : "")};
    }
    #CardButtons div {
      width: ${(props) => (props.first ? "2.5rem" : "")};
      height: ${(props) => (props.first ? "2.5rem" : "")};
    }
  }

  box-shadow: 0;
  transition: all 0.25s;
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
    #CardButtons {
      opacity: 1;
    }
  }
`;

export default OpportunityCard;
