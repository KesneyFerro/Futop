/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-no-undef */
import axios from "axios";
import React, { useEffect, useState } from "react";
import OpportunityCard from "../components/opportunityCard";
const chunkArray = (myArray: any, chunkSize: number) => {
  let index = 0;
  const arrayLength = myArray.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize);
    tempArray.push(myChunk);
  }

  return tempArray;
};

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

// console.log("a");

function Posts({ posts }: any): JSX.Element {
  console.log("Fetching posts 😡");
  // console.log(posts);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData]: any = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line require-jsdoc
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/getposts");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const [counter, setCounter] = useState(2);
  const [disable, setDisable] = React.useState(false);

  const doLoadMore = async (evt: any) => {
    evt.preventDefault();
    setDisable(true);
    await timeout(600);
    setDisable(false);
    setCounter(counter + 1);
  };

  if (error)
    return (
      <>
        <div className="Error w-full h-auto mt-0 mb-12">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <i className="bx bx-error text-[70px] text-red-500"></i>
            <h4 className="text-2xl mt-5 font-semibold">Erro ao obter dados</h4>
            <h1 className="text-base mt-1 font-medium">Código: 500</h1>
          </div>
        </div>
        <div className="seeMoreButtonDisplay w-full flex justify-center mb-6">
          <button
            disabled={true}
            className="SeeMoreBtn  bg-[#25092D] disabled:cursor-not-allowed disabled:bg-[#979797] text-white text-base rounded-full px-5 py-4 mt-5 flex justify-center w-[310px] items-center drop-shadow-lg"
          >
            Veja Mais
          </button>
        </div>
      </>
    );
  if (isLoading)
    return (
      <>
        <div className="mainOpportunities w-full min-h-[500px] h-auto mt-0 mb-[25px]">
          <div className="rounded-[15px] animate-pulse bg-gray-300 "></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 "></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 "></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 "></div>
          <div className="rounded-[15px] animate-pulse bg-gray-300 "></div>
        </div>
        <div className="seeMoreButtonDisplay w-full flex justify-center mb-6">
          <button
            disabled={true}
            className="SeeMoreBtn bg-[#25092D] disabled:cursor-not-allowed disabled:bg-[#979797] text-white text-base rounded-full px-5 py-4 mt-5 flex justify-center w-[310px] items-center drop-shadow-lg"
          >
            Veja Mais
          </button>
        </div>
      </>
    );

  // render data

  const postsdata = chunkArray(data?.posts, 5);

  // console.log(postsdata);
  return (
    <>
      {postsdata.slice(0, counter).map((post: any, index: any) => (
        <div
          key={Math.random()}
          className={`mainOpportunities w-full min-h-[500px] h-auto mt-0 mb-[25px] ${
            index % 2 === 1 ? "rightGrid" : ""
          } Grid${post.length}`}
        >
          {post.map((posts: any, index: any) => (
            <OpportunityCard
              first={index === 0 ? true : false}
              key={posts.id}
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
          onClick={(e) => doLoadMore(e)}
          className={`SeeMoreBtn bg-[#25092D] disabled:cursor-not-allowed disabled:bg-[#979797] text-white text-base rounded-full px-5 ${
            disable ? "py-[14px]" : "py-4"
          } mt-5 flex justify-center w-[310px] items-center drop-shadow-lg`}
        >
          {disable ? (
            <i className="bx bx-loader-alt color-white animate-spin text-lg"></i>
          ) : (
            "Veja Mais"
          )}
        </button>
      </div>
    </>
  );
}

export default Posts;
