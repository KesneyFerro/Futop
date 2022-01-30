/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { prominent } from "color.js";

const OpportunityCard = (props: any) => {
  () => {
    let cors_api_host = "cors-anywhere.herokuapp.com";
    let cors_api_url = "https://" + cors_api_host + "/";
    const slice = [].slice;
    const origin = window.location.protocol + "//" + window.location.host;
    const open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
      const args: any = slice.call(arguments);
      const targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (
        targetOrigin &&
        targetOrigin[0].toLowerCase() !== origin &&
        targetOrigin[1] !== cors_api_host
      ) {
        args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
    };
  };

  const [colorr, setColor] = useState("");

  if (typeof window === "object") {
    prominent(`${props.image}`, {
      amount: 4,
    }).then((color) => {
      setColor(color[3].toString());
    });
  }

  const theme = {
    main: colorr,
    image: props.image,
  };
  // props.finalcolor = colorr;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.25 }}
      className="w-auto h-auto cursor-pointer"
    >
      <ThemeProvider theme={theme}>
        <OpportunityCardStyle
          first={props.first}
          className={`${
            props.main ? "mainGrid" : ""
          } rounded-[15px] flex w-full h-full flex-col justify-between items-start px-[16px] py-[12px]`}
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
                        className="bg-[#F5F5F5] px-3 py-2 rounded-full mr-2 text-sm"
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
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.4)),
    linear-gradient(
      rgba(${(props) => props.theme.main}, 0.59),
      rgba(${(props) => props.theme.main}, 0.59)
    ),
    url(${(props) => props.theme.image});
  background-size: cover;

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
`;

export default OpportunityCard;
