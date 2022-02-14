/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-no-undef */
import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";
import OpportunityCard from "../components/opportunityCard";
import { useTranslations } from "next-intl";

//

const fetcher = async (url: any) =>
  await axios.get(url).then(async (res) => {
    return res.data;
  });
const chunkArray = (myArray: any, chunkSize: number) => {
  let index = 0;
  const reversedArray = myArray.reverse();
  const arrayLength = reversedArray.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = reversedArray.slice(index, index + chunkSize);
    tempArray.push(myChunk);
  }

  return tempArray;
};

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

function filterOpportunities(
  opportunities: any,
  inputvalue: string,
  type1: string,
  type2: string
) {
  if (type1 === "Tipo de Oportunidade") {
    type1 = "";
  }
  if (type2 === "Níveis de Escolaridade") {
    type2 = "";
  }
  if (
    (type1 === "Tipo de Oportunidade" && type2 === "Níveis de Escolaridade") ||
    (type1 === "" && type2 === "")
  ) {
    return opportunities.filter((opportunity: any) => {
      return opportunity.title.toLowerCase().includes(inputvalue.toLowerCase());
    });
  } else {
    // Check if the opportunity is of the type selected in a array list of tags and return the opportunity if it is

    return opportunities.filter((opportunity: any) => {
      if (opportunity.tags.some((tag: any) => tag.includes(type1))) {
        if (
          opportunity.tags.some(
            (tag: any) =>
              tag.trim().toLowerCase() == type2.trim().toLowerCase() ||
              type2 === ""
          )
        ) {
          return opportunity.title
            .toLowerCase()
            .includes(inputvalue.toLowerCase());
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  }
}

function Posts({
  counter,
  setCounter,
  inputValue,
  oportunitySelected,
  educationLevelSelected,
}: any) {
  const t = useTranslations("posts");

  const [isMore, setIsMore] = React.useState(true);
  useEffect(() => {
    setIsMore(true);
  }, [oportunitySelected, educationLevelSelected]);

  const loadNumber = 2;
  const doLoadMore = async (evt: any, posts: any) => {
    evt.preventDefault();
    setDisable(true);
    await timeout(600);
    setDisable(false);
    if (counter < posts.length) {
      setCounter(counter + loadNumber);
      if (counter + loadNumber >= posts.length) {
        setIsMore(false);
      } else {
        setIsMore(true);
      }
    } else {
      setIsMore(false);
    }
  };

  const [disable, setDisable] = React.useState(false);

  const { data, error } = useSWR(
    "https://futop.vercel.app/api/getposts",
    fetcher
  );

  if (error) {
    return (
      <>
        <div className="Error w-full h-auto mt-0 mb-12">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <i className="bx bx-error text-[70px] text-red-500"></i>
            <h4 className="text-2xl mt-5 font-semibold dark:text-white/90">
              {t("error")}
            </h4>
            <h1 className="text-base mt-1 font-medium dark:text-white/90">
              {t("code")}: {error.message}
            </h1>
          </div>
        </div>
        <div className="seeMoreButtonDisplay w-full flex justify-center mb-6">
          <button
            disabled={true}
            className="SeeMoreBtn  bg-[#25092D] disabled:cursor-not-allowed disabled:bg-[#979797] dark:disabled:bg-[#3c3c3c] disabled:dark:text-[#161819] disabled:dark:font-medium text-white text-base rounded-full px-5 py-4 mt-5 flex justify-center w-[310px] items-center drop-shadow-lg"
          >
            {t("seeMore")}
          </button>
        </div>
      </>
    );
  }
  if (!data)
    return (
      <>
        <div className="mainOpportunities w-full min-h-[500px] h-auto mt-0 mb-[25px]">
          <div className="rounded-[15px] animate-pulse bg-gray-300 dark:bg-[#1e2022] "></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 dark:bg-[#1e2022] "></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 dark:bg-[#1e2022]"></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 dark:bg-[#1e2022]"></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 dark:bg-[#1e2022]"></div>
        </div>
        <div className="seeMoreButtonDisplay w-full flex justify-center mb-6">
          <button
            disabled={true}
            className="SeeMoreBtn bg-[#25092D] disabled:cursor-not-allowed disabled:bg-[#979797] dark:disabled:bg-[#3c3c3c] disabled:dark:text-[#161819] disabled:dark:font-medium text-white text-base rounded-full px-5 py-4 mt-5 flex justify-center w-[310px] items-center drop-shadow-lg"
          >
            {t("seeMore")}
          </button>
        </div>
      </>
    );

  const searchedOpportunities = filterOpportunities(
    data.posts,
    inputValue.trim(),
    oportunitySelected,
    educationLevelSelected
  );

  const postsdata = chunkArray(searchedOpportunities, 5);

  if (postsdata.length === 0) {
    return (
      <>
        <div className="w-full h-auto flex flex-col justify-center items-center mb-[25px]">
          <i className="bx bx-error-circle text-center text-[70px] text-red-500 mb-3"></i>
          <h1 className="text-2xl font-semibold text-center dark:text-white">
            {t("notfound")}
          </h1>
        </div>
        <div className="seeMoreButtonDisplay w-full flex justify-center mb-6">
          <button
            disabled={true}
            className="SeeMoreBtn bg-[#25092D] disabled:cursor-not-allowed disabled:bg-[#979797] dark:disabled:bg-[#3c3c3c] disabled:dark:text-[#161819] disabled:dark:font-medium text-white text-base rounded-full px-5 py-4 mt-5 flex justify-center w-[310px] items-center drop-shadow-lg"
          >
            {t("seeMore")}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {postsdata.slice(0, counter).map((post: any, index: any) => (
        <div
          key={index}
          className={`mainOpportunities w-full min-h-[500px] h-auto mt-0 mb-[25px] ${
            index % 2 === 1 ? "rightGrid" : ""
          } Grid${post.length}`}
        >
          {post.map((posts: any, index: any) => (
            // <div className="bg-black"></div>
            <OpportunityCard
              first={index === 0 ? true : false}
              key={posts.id}
              id={posts.id}
              title={posts.title}
              tags={posts.tags}
              image={posts.image}
            />
          ))}
        </div>
      ))}
      <div className="seeMoreButtonDisplay w-full flex justify-center mb-6">
        <button
          disabled={disable}
          onClick={(e) => doLoadMore(e, postsdata)}
          className={`SeeMoreBtn bg-[#25092D] dark:bg-[#d8d8d8] dark:font-medium dark:text-black disabled:cursor-not-allowed disabled:bg-[#979797] dark:disabled:bg-[#3c3c3c] disabled:dark:text-[#161819] disabled:dark:font-medium text-white text-base rounded-full px-5 ${
            disable ? "py-[14px]" : "py-4"
          } mt-5 flex justify-center w-[310px] items-center drop-shadow-lg`}
        >
          {disable ? (
            <i className="bx bx-loader-alt dark:text-white color-white animate-spin text-lg"></i>
          ) : isMore ? (
            t("seeMore")
          ) : (
            t("noMore")
          )}
        </button>
      </div>
    </>
  );
}

export default Posts;
