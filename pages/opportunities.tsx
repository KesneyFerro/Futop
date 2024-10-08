/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-no-undef */
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { HomeCointainer } from "../styles/components/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Posts from "./components/opportunitysLoad";
import ShareAOpportunity from "./components/shareAOpportunity";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = ({ posts }: any) => {
  if (typeof window === "object") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  const t = useTranslations("index");
  const p = useTranslations("posts");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputvalue, setInputvalue] = useState("");

  const [opportunitySelected, setOpportunitySelected] = useState(
    "Tipo de Oportunidade"
  );
  const [opportunityType] = useState([
    "Tipo de Oportunidade",
    "Olimpíadas",
    "Bolsa",
    "Curso",
  ]);
  const opportunityTypeTxt = [
    p("Tipo de Oportunidade"),
    p("Olimpíadas"),
    p("Bolsa"),
    p("Curso"),
  ];
  const opportunityAdd = opportunityType.map(
    (opportunityAdd) => opportunityAdd
  );
  const handleOpportunityChange = (e: any) => {
    setOpportunitySelected(opportunityType[e.target.value]);
  };

  const [educationLevelSelected, seteducationLevelSelected] = useState(
    "Níveis de Escolaridade"
  );
  const educationLevelTxt = [
    p("Níveis de Escolaridade"),
    p("Ensino Fundamental I"),
    p("Ensino Fundamental II"),
    p("Ensino médio"),
  ];
  const [educationLevelType] = useState([
    "Níveis de Escolaridade",
    "Ensino Fundamental I",
    "Ensino Fundamental II",
    "Ensino médio",
  ]);
  const educationLevelAdd = educationLevelType.map(
    (educationLevelAdd) => educationLevelAdd
  );
  const handleEducationLevelChange = (e: any) => {
    seteducationLevelSelected(educationLevelType[e.target.value]);
  };

  const [counter, setCounter] = useState(1);
  useEffect(() => {
    setCounter(1);
  }, [opportunitySelected, educationLevelSelected]);

  const { data: session } = useSession();
  const router = useRouter();
  const { locale } = useRouter();
  useEffect(() => {
    if (session) {
      axios
        .post("/api/userinfo", {
          session: session,
          token: process.env.NEXT_PUBLIC_DBTOKEN,
        })
        .then((res) => {});
    } else {
    }
  }, [session]);

  function changeFilter() {
    setIsFilterOpen(!isFilterOpen);
    if (isFilterOpen == false) {
      seteducationLevelSelected("Níveis de Escolaridade");
      setOpportunitySelected("Tipo de Oportunidade");
    }
  }
  return (
    <HomeCointainer>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>{t("pagetitle")} - Futop</title>
        <meta property="og:title" content={`${t("pagetitle")} - Futop`} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL}/${locale}${router.asPath}`}
        />
        <meta property="og:description" content={`${t("indexp")}`} />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Futop" />
        <meta name="theme-color" content="#AF5BC6" />
      </Head>
      <main className="flex items-center flex-col dark:bg-[#161819] transition duration-300">
        <Navbar />
        <div className="mainContentOpportunities w-[90%] sm:w-[80%] flex justify-center flex-col mt-[80px]  mb-10">
          <div className="mt-24 mainContentTitle flex-col text-center">
            <div className="titleOpportunities">
              <h2 className=" font-extrabold text-[38px] titletext text-[#090D2D] dark:text-white mb-3">
                {t("welcome")}{" "}
                <span className=" text-[#FFC700]">{t("opportunity")}</span>
              </h2>
            </div>
            <div className="descriptionOpportunities mt-2">
              <p className="text-[#9F9F9E] font-medium text-[15px]">
                {t("indexp")}
              </p>
            </div>
          </div>
          <div
            id="searchbar"
            className="mt-16 searchbar bg-[#FDFDFE] dark:bg-[#1F2123] transition duration-300 w-full mb-16 h-auto drop-shadow-md rounded-[15px] flex-col px-4"
          >
            <div className="flex items-center w-full my-[10.5px]">
              <i className="bx bx-search text-[#8A8A8A] text-[25px] mr-3"></i>
              <input
                placeholder={t("search")}
                value={inputvalue}
                onChange={(e) => setInputvalue(e.target.value)}
                className=" border-0 outline-none focus:outline-none bg-transparent placeholder:text-sm placeholder:font-normal text-[15px] dark:text-white font-medium w-full"
              ></input>
              <button
                aria-label="filter"
                onClick={() => changeFilter()}
                className={`ml-5 filterBox rounded-[12px] cursor-pointer border-[2px] ${
                  isFilterOpen
                    ? "border-[#747474] "
                    : "border-[#5d6075] dark:border-white/50 "
                } w-[35px] min-w-[35px] h-[35px] flex justify-center  items-center ${
                  isFilterOpen
                    ? "bg-black/80 dark:bg-gray-100 "
                    : "bg-transparent"
                }`}
              >
                <i
                  className={`bx bx-filter-alt text-xl  ${
                    isFilterOpen
                      ? "text-[#ffffff] dark:text-black/70"
                      : "text-[#8A8A8A]"
                  }`}
                ></i>
              </button>
            </div>
            {isFilterOpen && (
              <div className="w-full h-14 flex items-center mb-[10.5px]">
                <select
                  onChange={(e) => handleOpportunityChange(e)}
                  className=" transition duration-300 border-2 mr-7 border-black/30 dark:border-white/60 text-[15px] text-black/70 font-semibold drop-shadow-sm appearance-none text-center rounded-2xl px-2 bg-white dark:bg-[#1F2123] dark:text-white/100 text-black w-full py-[10px]"
                >
                  {opportunityAdd.map((type, key) => (
                    <option key={key} value={key}>
                      {opportunityTypeTxt[key]}
                    </option>
                  ))}
                </select>
                <select
                  onChange={(e) => handleEducationLevelChange(e)}
                  className=" transition duration-300 border-2 border-black/30 dark:border-white/60 text-[15px] text-black/70 font-semibold drop-shadow-sm appearance-none text-center rounded-2xl px-2 bg-white dark:bg-[#1F2123] dark:text-white/100 text-black w-full py-[10px]"
                >
                  {educationLevelAdd.map((type, key, index) => (
                    <option key={key} value={key}>
                      {educationLevelTxt[key]}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <Posts
            counter={counter}
            setCounter={setCounter}
            inputValue={inputvalue}
            oportunitySelected={opportunitySelected}
            educationLevelSelected={educationLevelSelected}
          />
        </div>
        <ShareAOpportunity />
        <Footer />
      </main>
    </HomeCointainer>
  );
};
export const getServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
};
export default Home;
