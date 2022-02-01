/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-no-undef */
import axios from "axios";
// import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// import useSWRImmutable from "swr/immutable";
import { HomeCointainer } from "../styles/components/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import OpportunityCard from "./components/opportunityCard";
import ShareAOpportunity from "./components/shareAOpportunity";

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

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

// console.log("a");

function Posts({ posts }: any): JSX.Element {
  console.log("Fetching posts 😡");
  // console.log(posts);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData]: any = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://frames-kesneyferro.vercel.app/api/getposts"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const [counter, setCounter] = useState(1);
  const [button, setButton] = useState(false);

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
  function handleSeeMore(e: any) {
    e.preventDefault();
    setButton(true);
    delay(600).then(() => {
      setCounter(counter + 1);
      setButton(false);
    });
  }
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
          disabled={button}
          onClick={(e) => handleSeeMore(e)}
          className="SeeMoreBtn bg-[#25092D] disabled:cursor-not-allowed disabled:bg-[#979797] text-white text-base rounded-full px-5 py-4 mt-5 flex justify-center w-[310px] items-center drop-shadow-lg"
        >
          Veja Mais
        </button>
      </div>
    </>
  );
}

const Home: NextPage = ({ posts }: any) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputvalue, setInputvalue] = useState("");

  // Create a function that will get a array of objects and divide in arrays of 5 elements
  console.log(posts);
  // console.log(chunkArray(posts, 5));

  return (
    <HomeCointainer>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <meta charSet="UTF-8"></meta>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center flex-col">
        <Navbar />
        <div className="mainContentOpportunities w-[80%] flex justify-center flex-col mt-[80px]  mb-10">
          <div className="mt-24 mainContentTitle flex-col text-center">
            <div className="titleOpportunities">
              <h2 className=" font-extrabold text-[38px] text-[#090D2D] mb-3">
                Encontre a sua{" "}
                <span className=" text-[#FFC700]">opotunidade</span>
              </h2>
            </div>
            <div className="descriptionOpportunities mt-2">
              <p className="text-[#9F9F9E] font-medium text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sodales nibh leo. Cursus odio ullamcorper elit
                odio augue.
              </p>
            </div>
          </div>
          <div className="mt-16 searchbar bg-[#FDFDFE] w-full mb-16 h-auto drop-shadow-md rounded-[15px] flex-col px-4">
            <div className="flex items-center w-full my-[10.5px]">
              <i className="bx bx-search text-[#8A8A8A] text-[25px] mr-3"></i>
              <input
                placeholder="Pesquise Aqui..."
                value={inputvalue}
                onChange={(e) => setInputvalue(e.target.value)}
                className=" border-0 outline-none focus:outline-none bg-transparent text-sm w-full"
              ></input>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`ml-5 filterBox rounded-[12px] cursor-pointer border-[2px] ${
                  isFilterOpen ? "border-[#747474] " : "border-[#5d6075] "
                } w-[35px] min-w-[35px] h-[35px] flex justify-center  items-center ${
                  isFilterOpen ? "bg-black/80" : "bg-transparent"
                }`}
              >
                <i
                  className={`bx bx-filter-alt text-xl  ${
                    isFilterOpen ? "text-[#ffffff]" : "text-[#8A8A8A]"
                  }`}
                ></i>
              </button>
            </div>
            {isFilterOpen && (
              <div className="w-full h-14 flex items-center mb-[10.5px]">
                <select
                  name="cars"
                  id="cars"
                  className=" border-2 mr-7 border-black/30 text-[15px] text-black/70 font-semibold drop-shadow-sm appearance-none text-center rounded-2xl px-2 bg-white text-black w-full py-[10px]"
                >
                  <option value="audi">Tipo de Oportunidade</option>
                  <option value="volvo">Instituição</option>
                  <option value="saab">Bolsa</option>
                  <option value="opel">Curso</option>
                </select>
                <select
                  name="cars"
                  id="cars"
                  className=" border-2 border-black/30 drop-shadow-sm text-[15px] rounded-2xl text-black/70 font-semibold appearance-none text-center px-2 bg-white text-black w-full py-[10px]"
                >
                  <option value="audi">Níveis de Escolaridade</option>
                  <option value="volvo">Ensino Fundamental I</option>
                  <option value="saab">Ensino Fundamental II</option>
                  <option value="opel">Ensino Médio</option>
                </select>
              </div>
            )}
          </div>

          <Posts key={Math.random()} />
        </div>
        <ShareAOpportunity />
        <Footer />
      </main>
    </HomeCointainer>
  );
};
// export async function getServerSideProps() {
//   const res = await axios.get("http://localhost:3000/api/getposts");
//   const posts = res.data;
//   console.log(res);
//   return {
//     props: { posts }, // will be passed to the page component as props
//   };
// }

export default Home;
const delay = async (ms: number) => new Promise((res) => setTimeout(res, ms));
