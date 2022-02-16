/* eslint-disable require-jsdoc */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { prominent } from "color.js";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";
// import { mutate } from "swr";

const CardTypeLogo = styled.i`
  color: rgba(${(props) => props.theme.main}, 1);
  color: ${(props) =>
    props.theme.color == "toowhite" && "rgba(100, 100, 100, 1)"};
  /* color: ${(props) => props.theme.color == "tooblack" && "#bbbbbb"}; */
  /* filter: ${(props) => props.theme.color == "black" && "brightness(1.8)"};
  filter: ${(props) =>
    props.theme.color == "mediumblack" && "brightness(2.3)"};*/
  filter: ${(props) => props.theme.color == "white" && "brightness(1)"};
  background-color: #f5f5f5;
`;

const OpportunityCard = (props: any) => {
  // Create a function that will recive a array where the first element is a string date in format YYYY-MM-DD and the second element is a string time in format HH:MM:SS and return how many days has passed or remaing until the event
  const daysBetween = (date: string, time: string) => {
    const dateArray = date.split("-");
    const timeArray = time.split(":");

    // date1 with dateArray and timeArray
    const date1 = new Date(
      parseInt(dateArray[0]),
      parseInt(dateArray[1]) - 1,
      parseInt(dateArray[2]),
      parseInt(timeArray[0]),
      parseInt(timeArray[1]),
      parseInt(timeArray[2])
    );

    // get the current date
    const date2 = new Date();

    // get the difference in days between the two dates, if d2 > d1 then it will return a negative number and if d1 > d2 then it will return a positive number
    const daysDifference = Math.ceil(
      ((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) * -1
    );
    return daysDifference;
  };
  const timeLeft = daysBetween(
    props.time ? props.time[0] : "00-00-00",
    props.time ? props.time[1] : "00:00:00"
  );
  // console.log(isNaN(timeLeft))

  const { data: session } = useSession();
  const [colorr, setColor] = useState("");

  if (typeof window === "object") {
    prominent(`https://cors.jg-limamarinho202.workers.dev/?${props.image}`, {
      amount: 7,
    }).then((color: any) => {
      setColor(color[3].toString());
      // console.log(color[3].toString());
    });
  }

  function checkColor(color: string) {
    const brightness = Math.round(
      (parseInt(color.split(",")[0]) * 299 +
        parseInt(color.split(",")[1]) * 587 +
        parseInt(color.split(",")[2]) * 114) /
        1000
    );
    if (brightness > 235) {
      return "toowhite";
    } else if (brightness < 20) {
      return "tooblack";
    } else if (brightness < 50) {
      return "mediumblack";
    } else if (brightness > 100) {
      return "white";
    } else {
      return "black";
    }
  }
  const theme = {
    main: colorr,
    image: props.image,
    color: checkColor(colorr),
  };
  const t = useTranslations("posts");
  const removeitem = (e: any) => {
    e.stopPropagation();
    props.mutate(props.id);
    axios
      .post("https://futop.vercel.app/api/savepost", {
        token: process.env.NEXT_PUBLIC_DBTOKEN,
        session: session,
        postid: props.id,
      })
      .then((res) => {
        props.mutate("true");
      });
  };
  // props.finalcolor = colorr;
  const router = useRouter();
  return (
    <motion.div
      onClick={() => router.push(`/opportunity/${props.id}`)}
      // style={{ originY: 0, originX: 0.5 }}
      style={{ zIndex: props.first ? "3" : "1" }}
      whileHover={{
        scale: props.isfavorite ? 1.01 : props.first ? 1.04 : 1.05,
      }}
      whileTap={{ scale: props.isfavorite ? 0.95 : 0.9 }}
      transition={{ duration: 0.25 }}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      className="w-auto h-auto cursor-pointer "
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
            className="w-full h-auto flex flex-row items-start justify-between mb-12"
          >
            {props.isfavorite ? (
              <div
                onClick={(e) => removeitem(e)}
                className="z-[30] w-8 h-8 min-h-[2rem] border-[3px] rounded-full border-white hover:border-red-500 text-white hover:text-red-500 bg-transparent flex justify-center items-center"
              >
                <i className="bx bx-x text-2xl"></i>
              </div>
            ) : (
              <div></div>
            )}
            <div
              className={`flex flex-col ${
                isNaN(timeLeft) && "min-h-[4rem]"
              } items-end h-auto w-auto`}
            >
              {!isNaN(timeLeft) && (
                <CardTypeLogo
                  id="Cardtime"
                  onClick={(e) => e.stopPropagation()}
                  className="overflow-hidden min-h-[2rem] relative h-8 bg-[#F5F5F5] rounded-full mb-2 flex items-center"
                >
                  <span
                    id="Timeleft"
                    className="ml-3 mr-5 whitespace-nowrap  font-medium not-italic "
                  >
                    {timeLeft < 0 ? `Encerrado` : `${timeLeft} ${t("days")}`}
                  </span>
                  <i className="bx bg-[#F5F5F5] rounded-full 76y z-[3] bx-time text-[25px] mt-[1px] mr-[3px]"></i>
                </CardTypeLogo>
              )}
              <CardTypeLogo
                id="Cardtype"
                className="w-8 min-h-[2rem] h-8 bg-[#F5F5F5] rounded-full flex justify-center items-center"
              >
                {props.tags ? (
                  props.tags[0].trim().toLowerCase() === "bolsa" ? (
                    <i className="bx text-[22px] bxs-backpack"></i>
                  ) : props.tags[0].trim().toLowerCase() === "olimpíadas" ? (
                    <i className="bx text-[22px] bx-medal"></i>
                  ) : (
                    <i className="bx text-[22px] bx-id-card"></i>
                  )
                ) : (
                  <></>
                )}
              </CardTypeLogo>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[10px]">
            <div>
              <h3
                id="CardTitle"
                className="cardTitle text-xl font-bold text-white "
              >
                {props.title}
              </h3>
              <div
                id="CardTags"
                className="flex items-center mt-2 font-medium flex-wrap gap-[8px]"
              >
                {props.tags
                  ? props.tags.map((tag: any) => (
                      <div
                        key={tag}
                        className="bg-[#F5F5F5] px-3 py-2 rounded-full text-center text-sm"
                      >
                        {t(`${tag.trim()}`)}
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
  /* z-index: ${(props) => (props.first ? "3" : "1")}; */
  #CardTags > * + * {
    /* margin-left: 8px; */
  }
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    linear-gradient(
      rgba(${(props) => props.theme.main}, 0.5),
      rgba(${(props) => props.theme.main}, 0.5)
    ),
    url(${(props) => props.theme.image});
  background-size: cover;
  background-position: center;

  #Cardtype {
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
  #Cardtime {
    justify-content: flex-end;
    width: 2rem;
    transition: all 0.15s;
  }
  #Timeleft {
    /* transform: scale(0); */
    visibility: hidden;
    /* transition: all 0.05s;
    transition-delay: 0.1s; */

    /* opacity: 0; */
    position: absolute;
    left: 0;
  }
  box-shadow: 0;
  transition: all 0.25s;
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
    #Cardtype {
      opacity: 1;
    }
    #CardButtons {
    }
    #Timeleft {
      /* transform: scale(1); */
      visibility: visible;
      /* opacity: 1; */
      /* display: block; */
      /* transition: 0s;
      transition-delay: 0s; */
    }
    #Cardtime {
      /* justify-content: space-between; */
      /* width: auto; */
      width: 8rem;
    }
  }
`;

export default OpportunityCard;
