/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-no-undef */
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { HomeCointainer } from "../styles/components/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import OpportunityCard from "./components/opportunityCard";
import ShareAOpportunity from "./components/shareAOpportunity";

const Home: NextPage = () => {
  // Create a function that will get a array of objects and divide in arrays of 5 elements
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
  chunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
          <div className="mt-16 searchbar bg-[#FDFDFE] w-full h-auto drop-shadow-md rounded-[15px] flex-col px-4">
            <div className="flex items-center w-full my-[10.5px]">
              <i className="bx bx-search text-[#8A8A8A] text-[25px] mr-3"></i>
              <input
                placeholder="Pesquise Aqui..."
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
            <AnimatePresence initial={false}>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-14 flex items-center mb-[10.5px]"
                >
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
                    <option value="audi">Faixa etária</option>
                    <option value="volvo">Ensino Fundamental</option>
                    <option value="saab">Ensino Médio</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mainOpportunities w-full min-h-[500px] h-auto mt-16 mb-12">
            <OpportunityCard
              first={true}
              title="Oportunidade 2"
              tags={["Instituição", "Ensino Médio"]}
              image={
                "" ||
                "https://cdn.dribbble.com/users/759083/screenshots/15976861/media/f81dd36eaf76432302ebd25950296502.png?compress=1&resize=800x600&vertical=top"
              }
            />
            <OpportunityCard
              title="Oportunidade Ismart"
              tags={["Instituição", "Ensino médio"]}
              image={
                "https://cdn.dribbble.com/users/1355613/screenshots/15799226/media/942dbcf92162c70a6659dc0117a8cb3f.jpg?compress=1&resize=1200x900&vertical=top"
              }
            />
            <OpportunityCard
              title="Oportunidade 2"
              tags={["Instituição", "Ensino Fundamental"]}
              image={
                "https://cdn.dribbble.com/users/1304678/screenshots/15063530/media/f5eb865bb809e676e98fea0c7cd803d9.png?compress=1&resize=800x600&vertical=top"
              }
            />
            <OpportunityCard
              title="Oportunidade 2"
              tags={["Instituição", "Ensino Médio"]}
              image={
                "https://cdn.dribbble.com/users/1090020/screenshots/13813353/media/01ddddf5649e5a5cb569c2478881092d.png?compress=1&resize=1200x900&vertical=top"
              }
            />
            <OpportunityCard
              title="Oportunidade 2"
              tags={["Instituição", "Ensino Médio"]}
              image={
                "https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=800x600&vertical=top"
              }
            />
          </div>

          <div className="seeMoreButtonDisplay w-full flex justify-center mb-6">
            <button className="SeeMoreBtn bg-[#25092D] text-white text-base rounded-full px-5 py-4 mt-5 flex justify-center w-[310px] items-center drop-shadow-lg">
              Veja Mais
            </button>
          </div>
        </div>
        <ShareAOpportunity />
        <Footer />
      </main>
    </HomeCointainer>
  );
};
export async function getServerSideProps() {
  const res = await axios.get("/api/getposts");
  const posts = res.data.posts;
  return {
    props: { posts: posts }, // will be passed to the page component as props
  };
}

export default Home;
